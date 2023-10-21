import flagsmith from 'flagsmith';

const environmentID = 'QjgYur4LQTwe5HpvbvhpzK';

flagsmith.init({
 environmentID: environmentID,
 identity: 'flagsmith_sample_user',
 traits: { age: 21, country: 'England' }, // these will add to the user's existing traits
 onChange: (oldFlags, params) => {
  //Occurs whenever flags are changed

  const { isFromServer } = params; //determines if the update came from the server or local cached storage

  //Set a trait against the Identity
  flagsmith.setTrait('favourite_colour', 'blue'); //This save the trait against the user, it can be queried with flagsmith.getTrait

  //Check for a feature
  if (flagsmith.hasFeature('my_power_user_feature')) {
   myPowerUserFeature();
  }

  //Check for a trait
  if (!flagsmith.getTrait('accepted_cookie_policy')) {
   showCookiePolicy();
  }

  //Or, use the value of a feature
  const myPowerUserFeature = flagsmith.getValue('my_power_user_feature');

  //Check whether value has changed
  const myPowerUserFeatureOld = oldFlags['my_power_user_feature'] && oldFlags['my_power_user_feature'].value;
  
  if (myPowerUserFeature !== myPowerUserFeatureOld) {
  }
 },
});
import flagsmith from 'flagsmith';

const environmentID = 'DCYBQgBcuRF86fmvgZc2os';
const featureName = 'test_feature';

flagsmith.init({
  environmentID,
  cacheFlags: false,
  // cacheOptions: {ttl:2, skipAPI:false},
  // enableLogs: true,
  // enableAnalytics: true,
  identity: 'flagsmith_sample_user',
  onChange: (oldFlags, params) => {
    console.log(`oldFlags: ${JSON.stringify(oldFlags)}`);
    console.log(`params: ${JSON.stringify(params)}`);

    const flags = flagsmith.getAllFlags();
    console.log('Received flags', flags);

    const hasFeature = flagsmith.hasFeature(featureName);

    console.log(`has_feature: ${hasFeature}`);

    if (hasFeature) {
      const value = flagsmith.getValue(featureName);
      console.log(`value = ${value}`);

      // Check whether value has changed
      const valueOld = oldFlags[featureName] && oldFlags[featureName].value;

      if (value !== valueOld) {
        // Value has changed, do something here
      }
    }
  },
});

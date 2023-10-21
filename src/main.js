'use strict';

import flagsmith from 'flagsmith';

const environmentID = '<YOUR_CLIENT_SIDE_ENVIRONMENT_KEY>';
const feature_name = 'test_feature';

flagsmith.init({
  environmentID,
  cacheFlags: false,
  cacheOptions: {ttl:0, skipAPI:false},
  //enableLogs: true,
  //enableAnalytics: true, 
  identity: 'flagsmith_sample_user',
  defaultFlags: {
    my_feature: { id: 1, enabled: false, value: "test"},
  },
  onChange: (oldFlags, params) => {
    console.log('oldFlags: ' + JSON.stringify(oldFlags));
    console.log('params: ' + JSON.stringify(params));

    console.log("Received flags", flagsmith.getAllFlags())

    const has_feature = flagsmith.hasFeature(feature_name);

    console.log('has_feature: ' + has_feature);

    if (has_feature) {
      const value = flagsmith.getValue(feature_name);
      console.log("value = " + value);

      // Check whether value has changed
      const test_feature_old = oldFlags[feature_name] && oldFlags[feature_name].value;
      
      if (value !== test_feature_old) {
        // Value has changed, do something here
      }
    }
  }
});

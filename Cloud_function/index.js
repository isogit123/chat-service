const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

 exports.sendMsg = functions.https.onRequest((req, res) => {
const clientId = req.body.id;
const msg = req.body.msg;


admin.database().ref('msgs/' + name).set({
    state: state
  },function(error)
  {
  if(error)
  console.log('DB write error: ' + error);
  });

            const payLoad = {
		data: {
           	    name: name,
          	    state: state + ""
       		}
            };
			const options = {
        priority: "high",
        timeToLive: 60*60*2
    };

console.log('state: ' + state);
            return admin.messaging().sendToTopic("basket_full", payLoad, options).then(result => {
                 res.send();
            }
            );
           
});  

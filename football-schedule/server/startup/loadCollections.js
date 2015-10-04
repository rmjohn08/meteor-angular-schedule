console.log("loading collections...");

Meteor.startup(function() {
	
	if (Leagues.find().count() === 0) {
		console.log("loading Leagues collection...");
		var leagues = [
			{'name':'Summer mens open','date':'08/01/2015','duration':8,
			 'gameEvents' : [{'number':1,'game_time':'','home':'','away':'', 'result':[0,0]}]
			},
			{'name':'Summer mens 30+','date':'08/07/2015','duration':8,
			 'gameEvents' : [{'number':1,'game_time':'','home':'','away':'', 'result':[0,0]}]
			}
				
		];
	}

	for(var i=0; i < leagues.length; i++) {
				Leagues.insert(leagues[i]);

			}
})
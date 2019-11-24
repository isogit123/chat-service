
  export const addChat = (peerName) => {
    var dbPromise = idb.open('msgs', 1, function(upgradeDb) {
        switch (upgradeDb.oldVersion) {
          case 0:
            var chatsStore = upgradeDb.createObjectStore('chats', {autoIncrement: true});
            chatsStore.createIndex('time', 'time', {unique: false});
            chatsStore.createIndex('peer', 'peer', {unique: false});
        }
      });
  }
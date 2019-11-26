
  export const getDbPromise = () => {
    return indexedDB.open('msgs', 1, function(upgradeDb) {
        switch (upgradeDb.oldVersion) {
          case 0:
            var chatsStore = upgradeDb.createObjectStore('chats', {autoIncrement: true});
            chatsStore.createIndex('time', 'time', {unique: false});
            chatsStore.createIndex('peer', 'peer', {unique: false});
        }
      });
  }

  export const addMsg = (msg) => {
    getDbPromise().then(function (db){
      var tx = db.transaction('chats', 'readwrite');
      var store = tx.objectStore('chats');
      store.add(msg);
      return tx.complete;
    }).then(function() {
      console.log('added item');
    });
    
  }

  export const getChat = (peer) => {
    getDbPromise().then(function (db){
      var tx = db.transaction('chats', 'readwrite');
      var store = tx.objectStore('chats');
      return store.openCursor();
    }).then(function logItems(cursor) {
      if (!cursor) {
        return;
      }
      console.log('Cursored at:', cursor.key);
      for (var field in cursor.value) {
        console.log(cursor.value[field]);
      }
      return cursor.continue().then(logItems);
    });
    
  }
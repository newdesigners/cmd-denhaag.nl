export default function ({ app, store, route }) {
    const cookieResPopup = app.$cookies.get('popup');
    
    if(route.fullPath === '/' && cookieResPopup) {
      return store.commit('popups/setPopup', true);
    }

    if(route.fullPath === '/' && cookieResPopup === undefined) {
      return;
    } 

    if(cookieResPopup === undefined || cookieResPopup) {
      store.commit('popups/setPopup', true);
    }
  }
export default function ({ app, store, route }) {
  const cookieResPopup = app.$cookies.get('popup');

  if(route.fullPath === '/') {
    if(cookieResPopup === false || cookieResPopup === undefined) return;
  }

  if(route.fullPath.substring(1).split('/')[0] === 'uxd') {
    store.commit('variants/setVariant', 'UXD');
  } else {
    store.commit('variants/setVariant', 'IXD');
  }
}
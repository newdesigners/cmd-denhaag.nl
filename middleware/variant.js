export default function ({ app, store, route }) {
  const cookieRes = app.$cookies.get('popup');
  if(route.fullPath === '/') {
    if(cookieRes === false || cookieRes === undefined) return;
  }

  if(route.fullPath.substring(1).split('/')[0] === 'uxd') {
    console.log('UXD');
    store.commit('variants/setVariant', 'UXD');
  } else {
    console.log('IXD');
    store.commit('variants/setVariant', 'IXD');
  }
}
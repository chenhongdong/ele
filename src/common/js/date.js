export function formatDate(date, str) {
  if (/(y+)/.test(str)) {
    str = str.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(str)) {
      let s = o[k] + '';
      str = str.replace(RegExp.$1, (RegExp.$1.length === 1) ? s : addZero(s));
    }
  }
  return str;
};

function addZero(n) {
  return ('00' + n).substr(n.length);
}


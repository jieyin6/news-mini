export default {
    uuid(spliter = '') {
        console.log(333)
        const template = `xxxxxxxx${spliter}xxxx${spliter}xxxx${spliter}xxxx${spliter}xxxxxxxxxxxx`;
        let date = new Date().getTime();
        return template.replace(/[xy]/g, function (c) {
          const r = (date + Math.random() * 16) % 16 | 0;
          date = Math.floor(date / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    },
    deviceId() {
        console.log('deviceid')
        var time = new Date().getTime().toString(36);
        var uuid = wepy.getStorageSync(AUTH_KEY) || this.uuid('-');
        var str = `${time}_${uuid}_${key}`;
        return `${time}_${uuid}_${md5(str)}`;
    },
}
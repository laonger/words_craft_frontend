let api = {
    api_test: (vm, data) => {
        vm.ws.send(10001, data);
    },
    login: (vm, callback, user_name, pass) => {
        vm.$once('10002', callback);
        vm.ws.send(10002, {'name': user_name, 'pass': pass})
    },
    regist: (vm, callback, user_name, pass, nick_name) => {
        vm.$once('10003', callback);
        vm.ws.send(10003, {'name': user_name, 'pass': pass, 'nick_name': nick_name})
    },
    enterGame: (vm, callback) => {
        vm.$once('10101', callback);
        vm.ws.send('10101', {});
    },
    commitAnswer: (vm, callback, answer, time) => {
        vm.$once('10102', callback);
        if (time <= 0){
            time = 0;
        }
        vm.ws.send('10102', {"answer": answer, "useTime": time});
    }
}
export default api;

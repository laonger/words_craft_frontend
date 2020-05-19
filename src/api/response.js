

export let func_map = {
    // for test
    10001: (vm, jsonObj) => {
        console.log(vm, jsonObj);
    },
    // login
    10002: (vm, jsonObj) => {
        if ('IsError' in jsonObj) {
            //alert(jsonObj.message);
        } else {
            vm.$store.commit("updateOwn", jsonObj)
        }
        vm.$emit("10002", jsonObj);
    },
    // regist
    10003: (vm, jsonObj) => {
        if ('IsError' in jsonObj) {
            //alert(jsonObj.message);
        } else {
            vm.$store.commit("updateOwn", jsonObj)
        }
        vm.$emit("10003", jsonObj);
    },
    // enterGame
    10101: (vm, jsonObj) => {
        if (!jsonObj.NeedWait) {
            vm.$store.commit("resetScore")
            vm.$store.commit("updateOther", jsonObj.Other);
            vm.$store.commit("updateGame", jsonObj)
            vm.$store.commit("updateWord", {
                'word': jsonObj.Word.Question,
                'chinese': jsonObj.Word.Options,
            })
            vm.$emit("10101", jsonObj);
        }
    },
    // commitAnswer
    10102: (vm, jsonObj) => {
        if (!jsonObj.NeedWait) {
            vm.$emit("10102", jsonObj);

            vm.$store.commit("updateRoundResult", jsonObj)
            vm.$store.commit("updateWord", {
                'word': jsonObj.Word.Question,
                'chinese': jsonObj.Word.Options,
            })
        }
    },
    99999: (vm, jsonObj) => {
        console.log(vm, jsonObj);
    }
}


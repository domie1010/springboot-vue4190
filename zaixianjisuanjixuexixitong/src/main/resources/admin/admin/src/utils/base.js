const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianjisuanjixuexixitong/",
            name: "zaixianjisuanjixuexixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianjisuanjixuexixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "计算机学习系统"
        } 
    }
}
export default base

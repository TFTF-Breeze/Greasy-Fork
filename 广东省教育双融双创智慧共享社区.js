// ==UserScript==
// @name         广东省教育双融双创智慧共享社区
// @namespace    http://tampermonkey.net/
// @version      2025-02-11
// @description  try to take over the world!
// @author       You
// @match        https://srsc.gdedu.gov.cn/course/*
// @icon         https://cdn-srsc2.gdedu.gov.cn/02fdd2b34ff1e65457bf65d20b28965d/srsc/2023-04-28/ecb21f1b9eba46979b4be431cd2650a4.ico
// @grant        none
// ==/UserScript==

// 定义一个函数，输出当前时间
function printCurrentTime() {
    let duration = document.getElementsByTagName('"#chapter-video > video').duration;//视频总时长
    let current = document.getElementsByTagName('"#chapter-video > video').currentTime;//视频当前播放时长
    let course_this = document.querySelector(".c-reIinfor > .action > div > span");//当前课程
    if(course_this.textContent == '已完成'){
        let course = document.querySelectorAll(".c-reIinfor > div");//课程目录
        let a = 0;
        for(let i=0;i<=course.length-1;i++){
            if(course[i].querySelector("div > span").textContent == '未完成'){
                course[i].click();
                console.log("已点击未学习的课程！！！");
                a = 1;
            }
        }
        if(a == 0){
            let zhang = window.getComputedStyle(document.querySelector(".content > .current > .title > .ant-row > .ant-col-17 > div > span")).color;
            if(zhang == 'rgb(103, 194, 58)'){
                let cours = document.querySelector(".ant-col-24 > button:nth-child(3)");
                if(cours != null){
                    cours.click();
                    console.log("已点击下一章！！！");
                }
            }else{
                let cours = document.querySelector(".ant-col-24 > button:nth-child(2)");
                if(cours != null){
                    cours.click();
                    console.log("已点击下一节！！！");
                }
            }
        }
    }else{
        //不够播放时间继续播放
        let play = document.querySelector("#chapter-video > xg-start")//点击播放;
        if(play != null){
            play.click();
            console.log("已点击播放！！！");
        }
    }

    let Learning_detection = document.querySelector(".ant-btn-primary");//学习检测
    if(Learning_detection != null){
        Learning_detection.click(); //确认学习检测
        console.log("已确认学习检测！！！");
    }
}

(function() {
    'use strict';

    // 每秒运行一次printCurrentTime函数
    setInterval(printCurrentTime, 5000);

})();
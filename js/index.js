$(function(){
    $('#main').fullpage({
        scrollingSpeed: 1440,
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:['登录百度舆情','领先：数据手机与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
        animateAnchor:true,
        
    });
    
    
    $('#arrow1').on('click',function(){
        $('#man').fullpage.moveSectionDown();
    })
    $('#arrow2').on('click',function(){
        $('#man').fullpage.moveSectionDown();
    })
    $('#arrow3').on('click',function(){
        $('#man').fullpage.moveSectionDown();
    })
    
})
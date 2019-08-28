<template>
    <div class="footer">
        <div class="footer-price-desc">
            <i class="iconfont icon-iconfontgantanhao2"></i>
            <div class="footer-price-info">
                <span>票面价</span>
                是指通过景区指定窗口售卖的纸质门票上标注的价格
            </div>
        </div>
        <ul class="footer-nav">
            <li>
                <i class="iconfont icon-listfeiji"></i>
                <a href="#">机票</a>
            </li>
            <li>
                <i class="iconfont icon-listfeiji"></i>
                <a href="#">机票</a>
            </li>
            <li>
                <i class="iconfont icon-listfeiji"></i>
                <a href="#">机票</a>
            </li>
            <li>
                <i class="iconfont icon-listfeiji"></i>
                <a href="#">机票</a>
            </li>
        </ul>
        <ul class="footer-links">
            <li>
                <a href="#">登录</a>
            </li>
            <li>
                <a href="#">我的订单</a>
            </li>
            <li>
                <a href="#">最近浏览</a>
            </li>
            <li>
                <a href="#">关于我们</a>
            </li>
        </ul>
        <ul class="mobile_pc">
            <li class="active">
                <a href="javascript:;">触屏版</a>
            </li>
            <li>
                <a href="javascript:;">电脑版</a>
            </li>
        </ul>
        <div class="copyright">
            <span>Qunar 京ICP备05021087</span>
            <a href="javascript:;">意见反馈</a>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeFooter',
}
</script>
<style lang="less" scoped>
    .footer{
        margin-top: .1rem;
        padding: .14rem .1rem;
        font-size: .24rem;
        line-height: .32rem;
        background-color: #fff;
        color: #616161;
        .footer-price-desc{
            display: flex;
            .footer-price-info{
                margin-left: .1rem;
                span{
                    font-weight: bold;
                }
            }
        }
        .footer-nav{
            padding: 10px 10px 0 10px;
            width: 300px;
            height: 25px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
                font-size: .40rem;
            }
            a{
                margin-left: .05rem;
                text-decoration: underline;
                color: #9e9e9e;
                font-size: .28rem;
            }
        }
        .footer-links{
            display: flex;
            width: 100%;
            height: 39px;
            border-bottom: 1px solid #cacaca;
            align-items: center;
            li{
                padding-left: 20px;
                a{
                    font-size: .28rem;
                }
            }
        }
        .mobile_pc{
            .active{
                a{
                    color: #333;
                }
            }
            display: flex;
            justify-content: center;
            padding-top: .1rem;
            li{
                margin-left: .5rem;
                a{
                    font-size: .28rem;
                }
            }
        }
        .copyright{
            display: flex;
            justify-content: center;
            margin-top: .2rem;
            a{
                color: #9e9e9e;
            }
        }
    }
</style>

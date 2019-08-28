<template>
    <div class="ticket-wrap">
        <div class="ticket-tab" :class="{fixed:fixed}" ref="tab">
            <div class="ticket-tab-item">门票</div>
            <div class="ticket-tab-item">一日游</div>
            <div class="ticket-tab-item">景区服务</div>
            <div class="tab-slider"></div>
        </div>
        <ticket-group title='全票' :ticketList='ticketListFull' :buydata='buydata'></ticket-group>
        <ticket-group title='特殊人群票' :ticketList='SpecialCrowdTicket' :buydata='buydata'></ticket-group>
        <ticket-group title='特殊人群票' :ticketList='SpecialCrowdTicket' :buydata='buydata'></ticket-group>
        <ticket-group title='特殊人群票' :ticketList='SpecialCrowdTicket' :buydata='buydata'></ticket-group>
    </div>
</template>
<script>
import TicketGroup from '@/common/components/TicketGroup'
export default {
    name:'Ticket',
    components:{
        TicketGroup
    },
    data() {
        return {
            fixed:false,
            ticketListFull:[ //全票购票列表数据
                {
                    title:'全票',
                    price:'206',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:1
                },
                {
                    title:'情侣票',
                    price:'405.5',
                    BuyShow:false,  //预定购票组件默认隐藏
                    id:2
                }
            ],
            SpecialCrowdTicket:[ //特殊人群票
                {
                    title:'青少年/学生票',
                    price:'191',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:3
                },
                {
                    title:'大学生票',
                    price:'183',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:4
                },
                {
                    title:'高考考生专用票',
                    price:'193',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:5
                },
                {
                    title:'青少年/学生票',
                    price:'191',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:6
                },
                {
                    title:'大学生票',
                    price:'183',
                    BuyShow:false,    //预定购票组件默认隐藏
                    id:7
                },
                {
                    title:'高考考生专用票',
                    price:'193',
                    BuyShow:false,    //预定购票组件默认隐藏\
                    id:8
                },
            ],
            buydata:[  //预定购票的数据
                {
                    titleName:'长隆欢乐世界青少年/学生票',
                    time:'23:59前可订明日',
                    tag:{ tag1:'随时退',tag2:'' ,tag3:''},
                    price:'199'
                },
                {
                    titleName:'长隆欢乐世界青少年/学生票',
                    time:'23:59前可订明日',
                    tag:{ tag1:'随时退',tag2:'' ,tag3:''},
                    price:'199'
                },
                {
                    titleName:'长隆欢乐世界青少年/学生票',
                    time:'23:59前可订明日',
                    tag:{ tag1:'随时退',tag2:'' ,tag3:''},
                    price:'199'
                }
            ]
        }
    },
    methods:{
        handleScroll(){
            const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            console.log(scrollTop)
            scrollTop >=580?this.fixed = true:this.fixed = false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted(){
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="less" scoped>
    .ticket-wrap{
        position: relative;
        .ticket-tab{
            position: relative;
            background-color: #fff;
            color: #212121;
            height: .96rem;
            line-height: .96rem;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #ddd;
        }
        .fixed{
            position: fixed;
            top: .88rem;
            left: 0;
            right: 0;
        }
        .tab-slider{
            position: absolute;
            height: .04rem;
            width: 1.4rem;
            background-color: #00bcd4;
            left: 27px;
            bottom: 0;
        }
    }
</style>

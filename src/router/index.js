
import ArticleDetails from "../View/ArticleDetails.vue"
import{createRouter,createWebHistory} from "vue-router";
import HelloWorld from"../components/HelloWorld.vue"
import ArticleForm from"../components/ArticleForm.vue"
import CardList from"../components/CardList.vue"



const routes= [
    {
        name:"HelloWorld",
        component:HelloWorld,
        path:"/HelloWorld",
    },
    {
        name:"ArticleForm",
        component:ArticleForm,
        path:"/ArticleForm",
    },
    {
        name:"CardList",
        component:CardList,
        path:"/CardList",
    },
    {
     name:"ArticleDetails",
        component:ArticleDetails,
        path:"/ArticleDetails",

    } 
      
];
const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);
export default router;
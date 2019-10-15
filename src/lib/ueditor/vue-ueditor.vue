<template>
  <div>
    <script :id="id" type="text/plain" ></script>
  </div>
</template>

<script>
  import './ueditor.config.js'
  import './ueditor.all.js'
  import './lang/zh-cn/zh-cn.js'
  export default {
    name: "UEditor",
    props: {
      id: {
          type: String
      },
      config: {
          type: Object
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      //初始化UE
      const _this = this;
      this.editor = UE.delEditor(this.id);
      this.editor = UE.getEditor(this.id,this.config);
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
      getUEContent: function(){
       return this.editor.getContent();
      },
      setUEContent: function(txt){
       return this.editor.setContent(txt);
      },
      getContentTxt: function(){
        return this.editor.getContentTxt();
      }
    }
  }
</script>
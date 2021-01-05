<template>
  <div class="editor">
    <h3 class="title-IFE">{{ num }} {{ title }}</h3>
    <p v-html="editorContent"></p>
    <div class="input-area">
        <form>
            <label for="num">编号</label><br>
            <input v-model="num" name="num" placeholder="输入编号" /><br>
            <label for="title">标题</label><br>
            <input v-model="title" name="title" placeholder="输入标题" /><br>
            <label for="url">URL</label><br>
            <input v-model="url" name="url" placeholder="输入 URL" /><br>
            <label for="cate">类别</label><br>
            <select v-model="cate" name="cate">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="vue">Vue.JS</option>
            </select>
            <a v-if="editMode === 'add'" v-on:click="postIFE">添加</a>
            <a v-else-if="editMode === 'edit'" v-on:click="editIFE">编辑</a>
        </form>
        <div class="rich-editor" ref='editor' style='text-align:left'></div>
    </div>
  </div>
</template>

<script>
import PostServiceIFE from '@/PostServiceIFE'
import E from 'wangeditor'

export default {
  name: 'editor',
  props: {
    toEdit: Object
  },
  data () {
    return {
      title: '',
      cate: '',
      url: '',
      editorContent: '',
      num: '',
      editor: '',
      editMode: 'add'
    }
  },
  methods: {
    postIFE: function () {
      sessionStorage.setItem('IFE-draft', this.editorContents)
      PostServiceIFE.insertPost({
        title: this.title,
        cate: this.cate,
        url: this.url,
        text: this.editorContent,
        num: this.num
      })
      this.$router.go(0)
    },
    editIFE: function () {
      PostServiceIFE.editPost({
        title: this.title,
        cate: this.cate,
        url: this.url,
        text: this.editorContent,
        num: this.num
      }, this.toEdit._id)
      this.$router.go(0)
    }
  },
  mounted () {
    this.editor = new E(this.$refs.editor)
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = html.replace(/&lt;&lt;&lt;/g, '<').replace(/&gt;&gt;&gt;/g, '>').replace(/“/g, '「').replace(/”/g, '」')
    }
    this.editor.create()
  },
  watch: {
    toEdit: {
      handler (newVal) {
        if (newVal !== null) {
          this.title = this.toEdit.title
          this.cate = this.toEdit.cate
          this.url = this.toEdit.url
          this.num = this.toEdit.num
          this.editor.txt.html(this.toEdit.text)
          this.editorContent = this.toEdit.text
          this.editMode = 'edit'
        }
      },
      immediate: true
    }
  }
}
</script>

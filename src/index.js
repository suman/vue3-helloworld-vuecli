import vue3helloworldwebpack from './vue3-helloworld';
// import mycomp from './mycomp.vue';

vue3helloworldwebpack.install = (app) => {
  app.component(vue3helloworldwebpack.name, vue3helloworldwebpack  );
};

const totalNum  = 10 + 34;
console.log("hello brother ", totalNum)

export default vue3helloworldwebpack;


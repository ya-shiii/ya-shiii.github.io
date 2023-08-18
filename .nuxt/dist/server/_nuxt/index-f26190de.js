import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "destr";
const Navbar_vue_vue_type_style_index_0_scoped_6e7376d1_lang = "";
const _sfc_main$8 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar fixed top-0 left-0 w-full z-50 bg-[#03372A] cursor-pointer" }, _attrs))} data-v-6e7376d1><div class="container mx-auto px-4" data-v-6e7376d1><div class="flex justify-between items-center sm:py-0 py-4" data-v-6e7376d1><button class="sm:hidden" data-v-6e7376d1><svg class="h-8 w-10" fill="white" viewBox="0 0 14 20" data-v-6e7376d1>`);
      if (!isMobileMenuOpen.value) {
        _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.5C3 4.22386 3.22386 4 3.5 4H16.5C16.7761 4 17 4.22386 17 4.5C17 4.77614 
              16.7761 5 16.5 5H3.5C3.22386 5 3 4.77614 3 4.5ZM3 9.5C3 9.22386 3.22386 9 3.5 
              9H16.5C16.7761 9 17 9.22386 17 9.5C17 9.77614 16.7761 10 16.5 10H3.5C3.22386 10 
              3 9.77614 3 9.5ZM16.5 15C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 
              14H3.5C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H16.5Z" data-v-6e7376d1></path>`);
      } else {
        _push(`<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00391 4.49991C3.00391 
              4.22377 3.22777 3.99991 3.50391 3.99991H16.5039C16.78 3.99991 17.0039 4.22377 17.0039 
              4.49991C17.0039 4.77606 16.78 4.99991 16.5039 4.99991H3.50391C3.22777 4.99991 3.00391 
              4.77606 3.00391 4.49991ZM3.00391 9.49991C3.00391 9.22377 3.22777 8.99991 3.50391 
              8.99991H16.5039C16.78 8.99991 17.0039 9.22377 17.0039 9.49991C17.0039 9.77606 16.78 
              9.99991 16.5039 9.99991H3.50391C3.22777 9.99991 3.00391 9.77606 3.00391 9.49991ZM3.00391 
              14.4999C3.00391 14.2238 3.22777 13.9999 3.50391 13.9999H16.5039C16.78 13.9999 17.0039 
              14.2238 17.0039 14.4999C17.0039 14.7761 16.78 14.9999 16.5039 14.9999H3.50391C3.22777 
              14.9999 3.00391 14.7761 3.00391 14.4999Z" data-v-6e7376d1></path>`);
      }
      _push(`</svg></button><nav class="hidden sm:block" data-v-6e7376d1><ul class="flex space-x-4" data-v-6e7376d1><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Home</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>VMO</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Lessons</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Benefits</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Packages</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Testimonies</a></li><li data-v-6e7376d1><a class="navbar-link" data-v-6e7376d1>Contacts</a></li></ul></nav></div></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="sm:hidden bg-[#03372A] drop-shadow-md" data-v-6e7376d1><ul class="py-2 px-4" data-v-6e7376d1><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Home</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>VMO</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Lessons</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Benefits</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Packages</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Testimonies</a></li><li data-v-6e7376d1><a class="block py-2 navbar-link" data-v-6e7376d1>Contacts</a></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-6e7376d1"]]);
const _imports_0 = "" + __buildAssetsURL("mission.0ed3afe0.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "mx-auto relative w-full h-auto fade mb-20",
    id: "home"
  }, _attrs))}><div class="bg-no-repeat bg-contain"><div class="relative"><div class="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-r from-[#03372A] to-transparent"></div><div class="flex w-full bg-[#03372A]"><div class="bg-[#03372A] w-1/3"></div><img${ssrRenderAttr("src", _imports_0)} class="w-2/3 h-screen object-cover bg-[#03372A]"></div><div class="absolute top-1/2 lg:left-1/4 transform lg:-translate-x-1/2 md:mx-20 mx-10 -translate-y-1/2 text-white text-center lg:w-1/3 w-1/2"><h1 class="text-white font-black text-left lg:text-7xl text-3xl lg:mb-14 mb-5">TECHSAVVY CODECAMP</h1><p class="text-white font-semibold text-lg lg:text-2xl text-left">Enhancing your skills and knowledge in development, facilitating networking and knowledge-sharing among community members. Assisting job seekers in finding fulfilling roles in the IT Industry.</p></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "vmo",
    class: "pt-16 lg:pt-24"
  }, _attrs))}><div class="mx-auto text-white bg-[#03372A] outline outline-white lg:w-9/12 md:w-10/12 w-11/12 lg:p-10 p-3 mb-20 z-50 lg:flex lg:flex-wrap"><div class="lg:w-1/2 w-full px-5 text-justify mb-10"><p class="text-center font-black lg:text-5xl md:text-3xl text-xl mb-10">Vision</p><p class="">Our vision is to empower and support developers in their career growth, foster a vibrant and collaborative community, and connect talented individuals with rewarding opportunities in the IT industry. </p></div><div class="lg:w-1/2 w-full px-5 text-justify"><p class="text-center font-black lg:text-5xl md:text-3xl text-xl mb-10">Mission</p><p>Our mission is to enhance the skills and knowledge of developers, facilitate networking and knowledge-sharing among community members, and assist job seekers in finding fulfilling roles in the IT Industry. </p></div></div><div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VMO.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const Lessons_vue_vue_type_style_index_0_scoped_7f670c1e_lang = "";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "BG w-full bg-[url('../assets/bg/BG.png')] bg-no-repeat bg-cover cursor-default",
    id: "lessons"
  }, _attrs))} data-v-7f670c1e><div class="flex flex-col text-center w-full" data-v-7f670c1e><h1 class="mt-16 mb-10 text-6xl font-bold text-white" data-v-7f670c1e><span class="" data-v-7f670c1e>WHAT WE </span><span class="text-white px-3 font-black text-outline text-animation" data-v-7f670c1e>TEACH</span></h1><div class="lg:flex w-full items-stretch px-5" data-v-7f670c1e><div class="bg-[#D9D9D9] self-center lg:min-h-80 lg:w-1/5 sm:w-full lg:h- m-3 py-5 px-4 text-center justify-center blue-shadow animate-zoom" data-v-7f670c1e><p class="text-[#076269] font-bold text-2xl mb-10" data-v-7f670c1e>FIGMA</p><p class="lg:h-72 mb-8" data-v-7f670c1e>Collaborative web-based application to create interface designs for User Interface and User Experience. The web-based UX/UI design platform allows you to work in a centralized, collaborative space where countless tools meet to create a unique, customized workflow.</p></div><div class="bg-[#D9D9D9] self-center lg:min-h-80 lg:w-1/5 sm:w-full m-3 py-5 px-4 text-center justify-center blue-shadow animate-zoom" data-v-7f670c1e><p class="text-[#076269] font-bold text-2xl mb-10" data-v-7f670c1e>HTML | CSS | JAVASCRIPT</p><p class="lg:h-72 mb-10" data-v-7f670c1e>The baseline for creating a website, these three are the languages that will be used primarily to create the concepts of the clients&#39; e-Resume. HTML for formatting the layout of the website, CSS for the design of the website, Javascript for the functionality of the website.</p></div><div class="bg-[#D9D9D9] self-center lg:min-h-80 lg:w-1/5 sm:w-full m-3 py-5 px-4 text-center justify-center blue-shadow animate-zoom" data-v-7f670c1e><p class="text-[#076269] font-bold text-2xl mb-10" data-v-7f670c1e>NUXT | TAILWINDCSS | TYPESCRIPT</p><p class="lg:h-72 mb-12" data-v-7f670c1e> The advance versions of the baseline website languages. Nuxt to be used as a framework where we will build websites, Tailwindcss, a CSS framework to design the website, and lastly, Typescript which is a language built on top of Javascript created to be a better experience than base Javascript.</p></div><div class="bg-[#D9D9D9] self-center lg:min-h-80 lg:w-1/5 sm:w-full m-3 py-5 px-4 text-center justify-center blue-shadow animate-zoom" data-v-7f670c1e><p class="text-[#076269] font-bold text-2xl mb-10" data-v-7f670c1e>PYTHON</p><p class="lg:h-72 mb-12" data-v-7f670c1e>Python is a general-purpose, versatile, and powerful programming language. It&#39;s a great first language because Python code due to its conciseness and understandability.</p></div><div class="bg-[#D9D9D9] self-center lg:min-h-80 lg:w-1/5 sm:w-full m-3 py-5 px-4 text-center justify-center blue-shadow animate-zoom" data-v-7f670c1e><p class="text-[#076269] font-bold text-2xl mb-10" data-v-7f670c1e>DJANGO</p><p class="lg:h-72 mb-6" data-v-7f670c1e>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Django is a back-end server side web framework. Django is free, open source and written in Python making it easier to build web pages using Python.</p></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Lessons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-7f670c1e"]]);
const Benefits_vue_vue_type_style_index_0_scoped_e0c75e5f_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-[#056951] lg:pt-2 pt-16",
    id: "benefits"
  }, _attrs))} data-v-e0c75e5f><div class="BG bg-[#056951] w-full cursor-default pt-16" data-v-e0c75e5f><div class="bg-[#D9D9D9] lg:ml-10 sm:ml-5 lg:rounded-l-3xl sm:place-content-center lg:p-5 lg:mt-20 dropshadow1" data-v-e0c75e5f><h1 class="text-5xl text-center text-white lg:py-8 py-14 uppercase font-black text-outline" data-v-e0c75e5f>like what you see?</h1><div class="lg:flex sm:grid lg:px-5 sm:mx-2 pb-10" data-v-e0c75e5f><div class="lg:w-3/5 sm:w-full text-xl p-5 lg:text-right text-black" data-v-e0c75e5f><p data-v-e0c75e5f> These are the benefits of choosing to partake in the Tech Savvy Code Camp, a certificate of completion will be given upon creating a functioning e-Resume that clients&#39; will be able to use in applying for an IT job. Being knowledgeable in full stack web development gives you an edge in the industry as you are well-rounded in the areas of web-development. Exclusive merch is available per season and will be different each year. Lastly, being able to attend IT conventions and experience the world of being an IT practitioner and learn from the best in the industry. </p></div><div class="flex justify-center w-full px-7" data-v-e0c75e5f><div class="text-xl w-full mx-auto px-7 py-4 bg-[#03372A] rounded-l-lg text-white font-semibold dropshadow animate-zoom animate-float" data-v-e0c75e5f><h2 class="text-center text-6xl font-bold mb-8" data-v-e0c75e5f>Benefits</h2><ul class="text-2xl" data-v-e0c75e5f><li class="" data-v-e0c75e5f>Certificate of Completion</li><hr class="border-solid border-2 rounded mb-2 border-green-300 w-3/6" data-v-e0c75e5f><li class="" data-v-e0c75e5f>e-Resume</li><hr class="border-solid border-2 rounded mb-2 border-green-300 w-3/6" data-v-e0c75e5f><li class="" data-v-e0c75e5f>Full Stack Web Development</li><hr class="border-solid border-2 rounded mb-2 border-green-300 w-3/6" data-v-e0c75e5f><li class="" data-v-e0c75e5f>Exclusive Tech Savvy Merch</li><hr class="border-solid border-2 rounded mb-2 border-green-300 w-3/6" data-v-e0c75e5f><li class="" data-v-e0c75e5f>Attend IT Conventions</li><hr class="border-solid border-2 rounded mb-2 border-green-300 w-3/6" data-v-e0c75e5f><li class="" data-v-e0c75e5f>Learn from a Software Engineer with a decade long experience in the industry. </li><hr class="border-solid border-2 rounded mb-2 border-green-300" data-v-e0c75e5f></ul></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Benefits.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e0c75e5f"]]);
const Packages_vue_vue_type_style_index_0_scoped_8b81398e_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="lg:pt-2 pt-16 bg-[#056951]" id="packages" data-v-8b81398e></div><div class="BG w-full bg-[url(&#39;../assets/bg/BG2.png&#39;)] bg-no-repeat bg-cover cursor-default" data-v-8b81398e><div class="w-full justify-center lg:pt-20" data-v-8b81398e><div class="w-full flex mx-auto justify-center" data-v-8b81398e><h1 class="my-10 lg:text-7xl text-5xl text-[#4AA3AA] px-3 font-black uppercase text-outline" data-v-8b81398e>Packages</h1></div><div class="w-full flex flex-wrap mx-auto justify-center items-stretch" data-v-8b81398e><div class="lg:w-1/4 lg:h-80 p-7 bg-[#DBDBDB] m-4 rounded-3xl self-center text-center dropshadow animate-zoom" data-v-8b81398e><p class="text-3xl mb-2 font-bold" data-v-8b81398e>Online Sessions</p><p class="text-base" data-v-8b81398e>With this package, clients will be able to experience the code camp without having to go to the workspace.</p><hr class="border-solid border-4 rounded my-2" data-v-8b81398e><ul data-v-8b81398e><li class="text-base" data-v-8b81398e>175.00 per session</li><li class="text-base" data-v-8b81398e>2 hour sessions per weekend</li><li class="text-base" data-v-8b81398e>8:00PM - 10:00PM</li></ul></div><div class="lg:w-1/4 lg:h-96 p-7 bg-[#C8C8C8] m-4 rounded-3xl self-center text-center dropshadow animate-zoom" data-v-8b81398e><p class="text-3xl mb-2 font-bold" data-v-8b81398e>Onsite Sessions</p><p class="text-lg" data-v-8b81398e>With this package, clients will be able to fully experience the code camp in a face-to-face setting.</p><p class="text-lg" data-v-8b81398e> Experience the atmosphere of a professional, and company-like setting.</p><hr class="border-solid border-4 rounded my-2" data-v-8b81398e><ul data-v-8b81398e><li class="text-lg" data-v-8b81398e>325.00 per session (150.00 for the payment of the workspace)</li><li class="text-lg" data-v-8b81398e>4 hour sessions per weekend</li><li class="text-lg" data-v-8b81398e>1:00PM - 5:00PM</li></ul></div><div class="lg:w-1/4 lg:h-80 p-7 bg-[#DBDBDB] m-4 rounded-3xl self-center text-center dropshadow animate-zoom" data-v-8b81398e><p class="text-3xl mb-2 font-bold" data-v-8b81398e>Advanced Package</p><p class="text-base" data-v-8b81398e>With this package, clients experienced in the field of IT, will be able to fully experience the code camp in a pace matching their knowledge. As well as dictate the setting for their learning.</p><hr class="border-solid border-4 rounded my-2" data-v-8b81398e><ul data-v-8b81398e><li class="text-base" data-v-8b81398e>175 for online or 325.00 for onsite</li><li class="text-base" data-v-8b81398e>2 hours for online or 4 hours for onsite</li><li class="text-base" data-v-8b81398e>8:00PM - 10:00PM for online or 1:00PM - 5:00PM for onsite</li></ul></div></div></div></div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Packages.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8b81398e"]]);
const Testimonies_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="lg:pt-2 pt-16" id="testimonies"></div><div class="BG flex flex-col items-center mx-auto cursor-default mb-10"><h1 class="text-4xl md:text-6xl font-bold text-[#4AA3AA] lg:py-16 py-4"><span class="text-outline"></span><span class="text-[#F5F0BB] px-3 text-outline">Testimonies</span></h1><div class="border align-end relative custom-border my-5"><div class="circle"></div><p class="testimonial-text text-sm md:text-2xl md:pl-1 pl-16">This Code Camp has helped me get the job of my dreams.</p></div><div class="border align-left relative custom-border my-5"><div class="circle2"></div><p class="testimonial-text md:pr-1 pr-16">I am now confident in my skills as a full stack web developer.</p></div><div class="border align-end relative custom-border my-5"><div class="circle"></div><p class="testimonial-text text-sm md:text-2xl md:pl-1 pl-16">I landed a job using the e-Resume that I have built during this code camp.</p></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const Contacts_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black text-white cursor-default w-full" }, _attrs))}><div class="lg:pt-2 pt-16 w-full" id="contacts"></div><footer class="contact-section flex flex-wrap justify-between"><div class="column mb-8"><h1 class="text-center mb-2 text-3xl font-bold">About Us</h1><div class="intro text-center"><p class="mt-5 text-2xl font-bold">Welcome to Tech Savvy</p><p class="mt-5 font-bold">Address</p><p>In front of Ozamiz City Hall, 2nd floor of Mercury Drug/SSS, Ozamiz, Philippines</p><p class="mt-5 font-bold">Email Address</p><p>info@codecamp-techsavvy.com</p><p>codedevsolutions@gmail.com</p></div></div><div class="column mb-8"><h1 class="text-center mb-2 text-3xl font-bold">Contact Us</h1><form action="https://formspree.io/f/xgejvwgd" method="POST"><label for="name">Name:</label><input type="text" id="name" name="name" class="h-8" required><label for="email">Email:</label><input type="email" id="email" name="email" class="h-8" required><label for="message">Message:</label><textarea id="message" name="message" class="h-20" required></textarea><button type="submit" class="bg-teal-700 text-white px-4 py-2">Send Message</button></form></div><div class="column mb-10"><h1 class="text-center mb-2 text-3xl font-bold">Follow Us</h1><div class="social-icons text-black"><a href="https://www.facebook.com/TechSavvyCodeCamp" target="_blank" class="btn bg-teal-700 cursor-pointer">Facebook</a><a href="https://www.instagram.com/tech_savvy2023" target="_blank" class="btn bg-teal-700 text-black cursor-pointer">Instagram</a></div></div><div class="w-full text-center text-white"><p>©2023 TechSavvy Codecamp</p></div></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const index_vue_vue_type_style_index_0_scoped_93bad41c_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_Banner = __nuxt_component_1;
  const _component_VMO = __nuxt_component_2;
  const _component_Lessons = __nuxt_component_3;
  const _component_Benefits = __nuxt_component_4;
  const _component_Packages = __nuxt_component_5;
  const _component_Testimonies = __nuxt_component_6;
  const _component_Contacts = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#03372A] w-full" }, _attrs))} data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(ssrRenderComponent(_component_VMO, null, null, _parent));
  _push(`<div class="hidden-section" data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Lessons, null, null, _parent));
  _push(`</div><div class="hidden-section" data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Benefits, null, null, _parent));
  _push(`</div><div class="hidden-section" data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Packages, null, null, _parent));
  _push(`</div><div class="hidden-section" data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Testimonies, null, null, _parent));
  _push(`</div><div class="hidden-section" data-v-93bad41c>`);
  _push(ssrRenderComponent(_component_Contacts, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-93bad41c"]]);
export {
  index as default
};
//# sourceMappingURL=index-f26190de.js.map

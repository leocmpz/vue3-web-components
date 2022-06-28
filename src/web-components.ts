 import { defineCustomElement } from "vue";
 import VueHelloWorld from '@/components/HelloWorld.vue'

 export const HelloWorld = defineCustomElement(VueHelloWorld)

 export function register () {
  customElements.define('hello-world', HelloWorld)
 }
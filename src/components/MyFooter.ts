import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyFooter extends Vue {
  protected version: string = '0.1.5';
}
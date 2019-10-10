import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    items: Array,
  },
})
export default class PortofolioItem extends Vue {
    public getPic(url: string) : string {
        return `${process.env.BASE_URL}${url}`
    }
}
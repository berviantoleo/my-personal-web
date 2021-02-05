import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public contacts: object[] = [
    {
      id: 1,
      title: 'Github',
      icon: 'github',
      address: 'https://github.com/berviantoleo',
    },
    {
      id: 2,
      title: 'Gitlab',
      icon: 'gitlab',
      address: 'https://gitlab.com/bervianto.leo',
    },
    {
      id: 3,
      title: 'Linkedin',
      icon: 'linkedin',
      address: 'http://www.linkedin.com/in/bervianto-leo-pratama',
    },
    {
      id: 4,
      title: 'Medium',
      icon: 'medium',
      address: 'https://medium.com/@bervianto.leo',
    },
    {
      id: 5,
      title: 'Dev',
      icon: 'dev',
      address: 'https://dev.to/berviantoleo',
    },
    {
      id: 6,
      title: 'Telegram',
      icon: 'telegram',
      address: 'https://t.me/berviantoleo',
    },
    {
      id: 7,
      title: 'Stack Overflow',
      icon: 'stack-overflow',
      address: 'http://stackoverflow.com/users/6948591/bervianto-leo-pratama',
    },
    {
      id: 8,
      title: 'Youtube',
      icon: 'youtube',
      address: 'https://youtube.com/c/BerviantoLeoPratama',
    },
    {
      id: 9,
      title: 'Twitter',
      icon: 'twitter',
      address: 'https://twitter.com/berviantoleo',
    },
    {
      id: 10,
      title: 'Facebook',
      icon: 'facebook',
      address: 'https://www.facebook.com/bervianto.leo',
    },
    {
      id: 11,
      title: 'Instagram',
      icon: 'instagram',
      address: 'http://www.instagram.com/bervianto.leo',
    },
    {
      id: 12,
      title: 'Steam',
      icon: 'steam',
      address: 'http://steamcommunity.com/id/cyber-name',
    },
    {
      id: 13,
      title: 'Soundcloud',
      icon: 'soundcloud',
      address: 'http://soundcloud.com/bervianto-leo-pratama',
    },
  ];
}

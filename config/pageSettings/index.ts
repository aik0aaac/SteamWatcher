import { PageSetting } from './types'

const top: PageSetting = {
  title: 'TOP',
  subTitle: '',
  link: '/',
  icon: 'fas fa-home',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: true,
      href: '/',
    },
  ],
}

const appWatcher: PageSetting = {
  title: 'APP Watcher',
  subTitle: 'お気に入りアプリの今を知る',
  link: '/appWatcher',
  icon: 'far fa-eye',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'APP Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

const modWatcher: PageSetting = {
  title: 'MOD Watcher',
  subTitle: 'お気に入りMODの今を知る',
  link: '/modWatcher',
  icon: 'fas fa-cubes',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'MOD Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

const reviewWatcher: PageSetting = {
  title: 'Review Watcher',
  subTitle: 'お気に入りアプリのレビューを見る',
  link: '/reviewWatcher',
  icon: 'far fa-comments',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'Review Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

const newsWatcher: PageSetting = {
  title: 'News Watcher',
  subTitle: 'お気に入りアプリのニュースを見る',
  link: '/newsWatcher',
  icon: 'far fa-newspaper',
  breadcrumbs: [
    {
      text: 'TOP',
      disabled: false,
      href: '/',
    },
    {
      text: 'News Watcher',
      disabled: true,
      href: '/',
    },
  ],
}

export const pageSettings = {
  top,
  appWatcher,
  modWatcher,
  reviewWatcher,
  newsWatcher,
}

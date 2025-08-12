'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { use } from 'react';

// 多语言文本内容
const texts = {
  en: {
    title: "Hello ADP",
    description: "The most comprehensive online ADP tutorial, powered by FirstLab.",
    documentation: "Documentation",
    joinCommunity: "Join FirstLab Community",
    readyToStart: "Ready to build amazing AI applications with ADP? Start exploring our documentation!",
    scrollDown: "Scroll Down",
    // 第二屏文本
    features: "Features",
    openSource: {
      title: "Open Source",
      description: "Free and open source. Community driven development.",
      link: "Visit GitHub Repository"
    },
    community: {
      title: "Community Building",
      description: "Join the community to learn and contribute.",
      link: "Join FirstLab Community"
    },
    beginner: {
      title: "Start From Zero",
      description: "Solving the steep learning curve of ADP."
    },
    interactive: {
      title: "Interactive Documentation",
      description: "Try demos in real-time while reading documentation."
    },
    // 页脚文本
    contact: "Contact",
    friendLink: "Friend Link",
    license: "CC-BY-SA-4.0 license"
  },
  zh: {
    title: "Hello ADP",
    description: "最全面的 ADP 在线教程, 由 FirstLab 驱动",
    documentation: "文档",
    joinCommunity: "加入 FirstLab 社区",
    readyToStart: "准备使用 ADP 构建出色的 AI 应用程序？开始探索我们的文档吧！",
    scrollDown: "向下滚动",
    // 第二屏文本
    features: "特色功能",
    openSource: {
      title: "免费开源",
      description: "完全免费且开源，由社区驱动开发。",
      link: "访问GitHub仓库"
    },
    community: {
      title: "社区共建",
      description: "加入社区学习并贡献自己的力量。",
      link: "访问FirstLab社区"
    },
    beginner: {
      title: "从零开始",
      description: "解决了ADP学习曲线陡峭的问题。"
    },
    interactive: {
      title: "文档交互",
      description: "文档中的demo可以实时交互，在读之前可以先上手玩。"
    },
    // 页脚文本
    contact: "联系我们",
    friendLink: "友情链接",
    license: "CC-BY-SA-4.0 许可证"
  },
  ja: {
    title: "Hello ADP",
    description: "FirstLab が提供する、最も充実した ADP オンラインチュートリアルです。",
    documentation: "ドキュメント",
    joinCommunity: "FirstLab コミュニティに参加",
    readyToStart: "ADP で素晴らしい AI アプリケーションを構築する準備はできましたか？ドキュメントの探索を始めましょう！",
    scrollDown: "スクロールダウン",
    // 第二屏文本
    features: "特徴",
    openSource: {
      title: "オープンソース",
      description: "無料でオープンソース。コミュニティ主導の開発。",
      link: "GitHubリポジトリを訪問"
    },
    community: {
      title: "コミュニティ構築",
      description: "コミュニティに参加して学び、貢献しましょう。",
      link: "FirstLabコミュニティに参加"
    },
    beginner: {
      title: "ゼロからスタート",
      description: "ADPの急な学習曲線の問題を解決します。"
    },
    interactive: {
      title: "インタラクティブドキュメント",
      description: "ドキュメントを読みながらリアルタイムでデモを試せます。"
    },
    // 页脚文本
    contact: "お問い合わせ",
    friendLink: "友好链接",
    license: "CC-BY-SA-4.0 ライセンス"
  }
};

export default function HomePage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const resolvedParams = use(params);
  const { lang } = resolvedParams;
  const t = texts[lang as keyof typeof texts] || texts.en;

  // 根据不同语言设置链接文本
  const docText = {
    'zh': '开始使用',
    'ja': '始めましょう',
    'en': 'Get Started'
  }[lang] || 'Get Started';

  return (
    <>
      <main className="flex flex-1 flex-col items-center text-center">
        {/* 第一屏 - 首页 */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-12 relative">
          <div className="mb-8 relative">
            <Image 
              src="/images/hello-adp.png" 
              alt="Hello ADP Logo" 
              width={180} 
              height={180}
              className="mx-auto opacity-100"
              priority
            />
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            {t.title}
          </h1>
          
          <p className="text-fd-muted-foreground mb-10 text-xl max-w-2xl leading-relaxed">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${lang}/docs`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg 
                bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600
                text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="ri-book-open-line"></i>
              {docText}
            </Link>
            
            <Link
              href="https://discord.gg/PwZDHH4mv3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg 
                bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white
                hover:bg-gray-50 dark:hover:bg-gray-800 text-lg font-medium shadow-md hover:shadow-lg
                transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="ri-discord-fill text-indigo-500"></i>
              {t.joinCommunity}
            </Link>
          </div>
          
          <div className="text-fd-muted-foreground text-base max-w-2xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8">
            {t.readyToStart}
          </div>

          {/* 向下箭头 */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-fd-muted-foreground text-sm">{t.scrollDown}</span>
              <i className="ri-arrow-down-line text-2xl text-fd-muted-foreground"></i>
            </div>
          </div>
        </section>

        {/* 第二屏 - 特点介绍 */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            {t.features}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* 卡片 1: 免费开源 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-left group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <i className="ri-github-fill text-2xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.openSource.title}</h3>
              </div>
              <p className="text-fd-muted-foreground mb-6">{t.openSource.description}</p>
              <Link 
                href="https://github.com/stvlynn/hello-adp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {t.openSource.link}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* 卡片 2: 社区共建 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-left group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <i className="ri-team-fill text-2xl text-purple-600 dark:text-purple-400"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.community.title}</h3>
              </div>
              <p className="text-fd-muted-foreground mb-6">{t.community.description}</p>
              <Link 
                href="https://discord.gg/PwZDHH4mv3" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                {t.community.link}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* 卡片 3: 从零开始 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-left group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <i className="ri-rocket-line text-2xl text-green-600 dark:text-green-400"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.beginner.title}</h3>
              </div>
              <p className="text-fd-muted-foreground">{t.beginner.description}</p>
            </div>

            {/* 卡片 4: 文档交互 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 text-left group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-800/50 transition-colors">
                  <i className="ri-code-box-line text-2xl text-amber-600 dark:text-amber-400"></i>
                </div>
                <h3 className="text-xl font-semibold">{t.interactive.title}</h3>
              </div>
              <p className="text-fd-muted-foreground">{t.interactive.description}</p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 联系信息和友情链接 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* 第一列：联系方式 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t.contact}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-mail-line text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="mailto:hello@1st.ac.cn" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">hello@1st.ac.cn</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-twitter-x-line text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="https://twitter.com/FirstLabAI" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">@FirstLabAI</a>
                </li>
              </ul>
            </div>
            
            {/* 第二列：友情链接 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t.friendLink}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-link text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="https://hello-ctf.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">Hello-CTF</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-link text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="https://lke.cloud.tencent.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">腾讯云智能体平台</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-link text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="https://1st.ac.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">FirstLab</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <i className="ri-link text-lg text-gray-600 dark:text-gray-400"></i>
                  </div>
                  <a href="https://github.com/WorkWorkLabs/Web3-Recruitment-Platform" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">WorkWork</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 分隔线 */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* 作者信息 */}
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <Image 
                  src="https://s2.loli.net/2025/05/16/pHlugt6BPKJEzGW.jpg" 
                  alt="Steven Lynn" 
                  width={56} 
                  height={56} 
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                />
                <div>
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Steven Lynn</p>
                  <div className="flex items-center gap-4 mt-2">
                    <a href="https://twitter.com/Stv_Lynn" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <i className="ri-twitter-x-line text-xl"></i>
                    </a>
                    <a href="https://github.com/stvlynn" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <i className="ri-github-line text-xl"></i>
                    </a>
                    <a href="https://www.buymeacoffee.com/stvlynn" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <i className="ri-cup-line text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 许可证信息 */}
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t.license}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// 声明全局变量用于存储anime函数引用
declare global {
  interface Window {
    __anime?: any;
  }
}
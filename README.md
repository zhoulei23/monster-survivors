# Monster Survivors Game Website

这是一个基于 Next.js 和 TypeScript 构建的 Monster Survivors 游戏网站。网站提供了一个现代化的游戏展示平台，包含游戏介绍、特性说明和玩法指南。

## 项目特点

- 使用 Next.js 13+ 构建的现代化 Web 应用
- TypeScript 支持，提供类型安全
- 响应式设计，适配各种设备屏幕
- Tailwind CSS 构建的现代化 UI
- 优化的性能和用户体验

## 技术栈

- Next.js 13+
- TypeScript
- Tailwind CSS
- Node.js
- React

## 文件结构

```
monster-survivors/
├── app/              # Next.js 应用目录
├── components/       # React 组件
├── public/          # 静态资源
├── styles/          # 样式文件
├── types/           # TypeScript 类型定义
├── lib/             # 工具函数和库
├── games/           # 游戏相关资源
├── next.config.js   # Next.js 配置
├── tailwind.config.js # Tailwind CSS 配置
├── tsconfig.json    # TypeScript 配置
└── package.json     # 项目依赖配置
```

## 主要功能

1. **游戏展示**
   - 嵌入式游戏窗口
   - 全屏支持
   - 响应式布局

2. **游戏介绍**
   - 详细的游戏背景说明
   - 游戏特性介绍
   - 玩法指南

3. **现代化架构**
   - 基于 Next.js 的服务端渲染
   - TypeScript 类型安全
   - 优化的构建和部署流程

## 如何运行

1. 克隆项目到本地
2. 安装依赖：
   ```bash
   npm install
   ```
3. 运行开发服务器：
   ```bash
   npm run dev
   ```
4. 构建生产版本：
   ```bash
   npm run build
   ```

## 游戏控制说明

- 使用 WASD 或方向键移动角色
- 点击或触摸屏幕进行攻击
- 收集资源和能量提升
- 在波次之间升级能力
- 尽可能长时间生存

## 贡献指南

欢迎提交 Pull Request 来改进项目。对于重大更改，请先开 issue 讨论您想要更改的内容。

## 开发指南

1. 确保已安装 Node.js 16+ 版本
2. 遵循项目的 TypeScript 和代码风格规范
3. 使用 `npm run dev` 进行本地开发
4. 提交前运行 `npm run build` 确保构建成功

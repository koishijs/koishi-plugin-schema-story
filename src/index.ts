import { Schema } from 'koishi'

export function apply() {}

export const name = 'schema-story'
export const filter = false

export const usage = `
## 插件说明

这个插件并不会做任何事情。它的配置本身是一篇交互式小说。

如果你发现下方的某些配置项显示不正常，那么你可能需要更新你的 console 插件版本，或者点击顶部的按钮进行问题反馈。

现在让我们开始吧！
`

export const Config: any = Schema.intersect([
  Schema.object({
    '伦敦，1872 年': Schema.never(),
    'Phileas Fogg 先生的住所。': Schema.never(),
    'Phileas Fogg 先生早早从改革俱乐部回到了家，并乘坐了新型的蒸汽运输机！': Schema.never(),
    '“领航,” 他喊到。 "我们去环游世界！"': Schema.never(),
    '': Schema.union([
      Schema.const(' '),
      Schema.const('“环游世界，先生？”'),
      Schema.const('点头'),
    ]),
  }).description('故事正文'),
  Schema.union([
    Schema.intersect([
      Schema.object({
        '': Schema.const('“环游世界，先生？”').required(),
        '“环游世界，先生？”我大吃一惊。': Schema.never(),
        '“你在开玩笑！”我认真地对他说。“你一定是在和我开玩笑，先生。”': Schema.never(),
        '“我很认真。”': Schema.never(),
        ' ': Schema.union([
          Schema.const(' '),
          Schema.const('“好吧。”'),
        ]),
      }),
      Schema.union([
        Schema.object({
          ' ': Schema.const('“好吧。”').required(),
          '“好吧。”': Schema.never(),
        }),
        Schema.object({
          '【请选择一项以阅读后续剧情】': Schema.never(),
        }),
      ]),
    ]),
    Schema.object({
      '': Schema.const('点头').required(),
      '我点了点头，但不相信一个字。': Schema.never(),
    }),
    Schema.object({
      '【请选择一项以阅读后续剧情】': Schema.never(),
    }),
  ]),
  Schema.union([
    Schema.intersect([
      Schema.union([
        Schema.object({
          ' ': Schema.const('“好吧。”').required(),
        }),
        Schema.object({
          '': Schema.const('点头').required(),
        }),
      ]),
      Schema.object({
        '“我们将在八十天内环游地球。”他很平静地提出了这个近乎疯狂地计划：“我们 8:25 去巴黎。一小时后。”': Schema.never(),
        '【全文完】': Schema.never(),
      }),
    ]),
    Schema.object({}),
  ]),
] as any)

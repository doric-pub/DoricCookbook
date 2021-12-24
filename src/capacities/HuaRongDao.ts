import {
  animate,
  Color,
  FlexDirection,
  flexlayout,
  gestureContainer,
  Gravity,
  Group,
  image,
  Justify,
  log,
  modal,
  Panel,
  ScaleType,
  stack,
  storage,
  Text,
  text,
  View,
  vlayout,
  layoutConfig,
} from "doric";

import pic0 from "../images/pic0.png";
import pic3 from "../images/pic3.png";
import pic6 from "../images/pic6.png";
import pic10 from "../images/pic10.png";
import pic11 from "../images/pic11.png";
import pic13 from "../images/pic13.png";
import pic14 from "../images/pic14.png";

const kMenuWidth = Math.floor((Environment.screenWidth - 60) / 4);
const kWidth = 4 * kMenuWidth;
const kHeight = 5 * kMenuWidth;
const kGameProgressKey = "kGameProgressKey";
const buttonColor = Color.parse("#A0522D");

const colors = [
  Color.parse("#339999"),
  Color.parse("#CC3333"),
  Color.parse("#FF9999"),
  Color.parse("#CCCC00"),
  Color.parse("#9999FF"),
  Color.parse("#CC6699"),
  Color.parse("#666699"),
  Color.parse("#0099CC"),
];

interface RoleModel {
  name: string;
  type: 12 | 22 | 21 | 11;
  origin: {
    x: number;
    y: number;
  };
  photoPath: string;
}

interface StepModel {
  desc?: String;
  direction: number;
  roleName: String;
  index: number;
}

interface DataModel {
  steps?: Array<StepModel>;
  // 数据源 角色数组
  rolePositions?: Array<RoleModel>;
}

@Entry
export class HuaRongDao extends Panel {
  // 数据源
  dataModel: DataModel = {};
  // 存储所有的卡片视图
  roleViews?: View[];
  btnEnabled: boolean = true;
  responsedGesture: boolean = false;
  saveBtn!: Text;
  rePlayBtn!: Text;
  backBtn!: Text;

  // 检测人物是否能向该方向移动
  // direction: 1 left, 2 right, 3 top, 4 top
  checkRoleCanMoveToDirection(
    index: number,
    direction: number,
    view: View
  ): Boolean {
    const it = this.dataModel;
    if (
      !it ||
      !this.roleViews ||
      !it.rolePositions ||
      this.roleViews.length != it.rolePositions.length
    )
      return false;
    const item: RoleModel = it.rolePositions[index];
    var X = 0;
    var Y = 0;
    switch (direction) {
      case 1:
        {
          // 向左边
          X = (item.origin.x - 1) * kMenuWidth;
          Y = item.origin.y * kMenuWidth;
        }
        break;
      case 2:
        {
          // 向右边
          X = (item.origin.x + 1) * kMenuWidth;
          Y = item.origin.y * kMenuWidth;
        }
        break;
      case 3:
        {
          // 向上
          X = item.origin.x * kMenuWidth;
          Y = (item.origin.y - 1) * kMenuWidth;
        }
        break;
      case 4:
        {
          // 向下
          X = item.origin.x * kMenuWidth;
          Y = (item.origin.y + 1) * kMenuWidth;
        }
        break;
    }
    var width = Math.floor(item.type / 10) * kMenuWidth;
    var height = (item.type % 10) * kMenuWidth;
    var maxX = X + width;
    var maxY = Y + height;
    // 找到不可以移动的场景
    if (X < 0 || Y < 0) {
      return false;
    }
    if (maxX > kWidth || maxY > kHeight) {
      return false;
    }
    for (let index = 0; index < it.rolePositions.length; index++) {
      const element = it.rolePositions[index];
      if (element.name == item.name) continue;
      var elementX = element.origin.x * kMenuWidth;
      var elementY = element.origin.y * kMenuWidth;
      var elementWidth = Math.floor(element.type / 10) * kMenuWidth;
      var elementHeight = (element.type % 10) * kMenuWidth;
      var emaxX = elementX + elementWidth;
      var emaxY = elementY + elementHeight;
      if (emaxX > X && elementX < maxX && emaxY > Y && elementY < maxY) {
        return false;
      }
    }
    const duration = 100;
    switch (direction) {
      case 1:
        {
          // 向左边
          animate(this.context)({
            animations: () => {
              view.x -= kMenuWidth;
            },
            duration: duration,
          }).then(() => {
            item.origin.x -= 1;
            it.steps?.push({
              direction: direction,
              roleName: item.name,
              desc: `${item.name}-向左`,
              index: index,
            });
            this.judgeUserIsWin(item);
          });
        }
        break;
      case 2:
        {
          // 向右边
          animate(this.context)({
            animations: () => {
              view.x += kMenuWidth;
            },
            duration: duration,
          }).then(() => {
            item.origin.x += 1;
            it.steps?.push({
              direction: direction,
              roleName: item.name,
              desc: `${item.name}-向右`,
              index: index,
            });
            this.judgeUserIsWin(item);
          });
        }
        break;
      case 3:
        {
          // 向上
          animate(this.context)({
            animations: () => {
              view.y -= kMenuWidth;
            },
            duration: duration,
          }).then(() => {
            item.origin.y -= 1;
            it.steps?.push({
              direction: direction,
              roleName: item.name,
              desc: `${item.name}-向上`,
              index: index,
            });
            this.judgeUserIsWin(item);
          });
        }
        break;
      case 4:
        {
          // 向下
          animate(this.context)({
            animations: () => {
              view.y += kMenuWidth;
            },
            duration: duration,
          }).then(() => {
            item.origin.y += 1;
            it.steps?.push({
              direction: direction,
              roleName: item.name,
              desc: `${item.name}-向下`,
              index: index,
            });
            this.judgeUserIsWin(item);
          });
        }
        break;
    }
    return true;
  }

  // 判断是否获胜
  judgeUserIsWin(moveItem?: RoleModel) {
    if (moveItem && moveItem.name == "曹操") {
      if (moveItem.origin.x == 1 && moveItem.origin.y == 3) {
        modal(this.context)
          .confirm({
            title: "YOU WIN!",
            msg: "恭喜您获胜！是否查看获胜步骤？",
            okLabel: "查看",
            cancelLabel: "取消",
          })
          .then(
            () => {
              // OK 查看
              const it = this.dataModel;
              var str: string = "";
              it.steps?.forEach((step, index) => {
                str = str + step.desc + ",";
              });
              log(`获胜步骤为：${str}`);
              modal(this.context).confirm({
                title: "获胜步骤",
                msg: str,
                okLabel: "分享",
                cancelLabel: "取消",
              });
            },
            () => {
              // Cancel 取消
            }
          );
      }
    }
  }

  resetSubViewsFrame(state: DataModel) {
    if (this.roleViews) {
      this.roleViews.forEach((view, index) => {
        if (
          this.roleViews &&
          state.rolePositions &&
          this.roleViews.length == state.rolePositions.length
        ) {
          const item: RoleModel = state.rolePositions[index];
          if (item) {
            view.y = item.origin.y * kMenuWidth;
            view.x = item.origin.x * kMenuWidth;
          }
        }
      });
      this.attached(state, this);
    }
  }

  attached(state: DataModel, vh: HuaRongDao): void {
    if (!state) return;
    vh.backBtn.onClick = () => {
      const it = this.dataModel;
      const steps = it.steps;
      if (
        !it ||
        !steps ||
        !vh.roleViews ||
        !it.rolePositions ||
        vh.roleViews.length != it.rolePositions.length
      )
        return;
      if (steps.length == 0) {
        modal(this.context).toast("已回到游戏开始阶段");
      } else {
        if (!this.btnEnabled) return;
        this.btnEnabled = false;
        const step = steps[steps.length - 1];
        const duration = 100;
        const item: RoleModel = it.rolePositions[step.index];
        const view = vh.roleViews[step.index];
        setTimeout(() => {
          this.btnEnabled = true;
        }, 100);
        switch (step.direction) {
          case 1:
            {
              // 向左边
              animate(this.context)({
                animations: () => {
                  view.x += kMenuWidth;
                },
                duration: duration,
              }).then(() => {
                item.origin.x += 1;
                it.steps?.pop();
              });
            }
            break;
          case 2:
            {
              // 向右边
              animate(this.context)({
                animations: () => {
                  view.x -= kMenuWidth;
                },
                duration: duration,
              }).then(() => {
                item.origin.x -= 1;
                it.steps?.pop();
              });
            }
            break;
          case 3:
            {
              // 向上
              animate(this.context)({
                animations: () => {
                  view.y += kMenuWidth;
                },
                duration: duration,
              }).then(() => {
                item.origin.y += 1;
                it.steps?.pop();
              });
            }
            break;
          case 4:
            {
              // 向下
              animate(this.context)({
                animations: () => {
                  view.y -= kMenuWidth;
                },
                duration: duration,
              }).then(() => {
                item.origin.y -= 1;
                it.steps?.pop();
              });
            }
            break;
        }
      }
    };

    /// 保存进度
    vh.saveBtn.onClick = () => {
      const it = this.dataModel;
      storage(this.context)
        .setItem(kGameProgressKey, JSON.stringify(it))
        .then(() => {
          modal(this.context).toast("保存成功");
        });
    };

    /// 重新开始
    vh.rePlayBtn.onClick = () => {
      modal(this.context)
        .confirm({
          title: "温馨提示",
          msg: "您确定要重新开始吗？",
          okLabel: "确定",
          cancelLabel: "取消",
        })
        .then(() => {
          // OK 确定
          this.reset(state);
          animate(this.context)({
            animations: () => {
              this.resetSubViewsFrame(state);
            },
            duration: 300,
          });
        });
    };
  }

  // 重置
  reset(it: DataModel) {
    it.steps = [];
    it.rolePositions = [
      {
        name: "张飞",
        type: 12,
        origin: { x: 0, y: 0 },
        photoPath: "pic11",
      },
      {
        name: "曹操",
        type: 22,
        origin: { x: 1, y: 0 },
        photoPath: "pic0",
      },
      {
        name: "赵云",
        type: 12,
        origin: { x: 3, y: 0 },
        photoPath: "pic10",
      },
      {
        name: "黄忠",
        type: 12,
        origin: { x: 0, y: 2 },
        photoPath: "pic14",
      },
      {
        name: "关羽",
        type: 21,
        origin: { x: 1, y: 2 },
        photoPath: "pic3",
      },
      {
        name: "马超",
        type: 12,
        origin: { x: 3, y: 2 },
        photoPath: "pic13",
      },
      {
        name: "卒1",
        type: 11,
        origin: { x: 1, y: 3 },
        photoPath: "pic6",
      },
      {
        name: "卒2",
        type: 11,
        origin: { x: 2, y: 3 },
        photoPath: "pic6",
      },
      {
        name: "卒3",
        type: 11,
        origin: { x: 0, y: 4 },
        photoPath: "pic6",
      },
      {
        name: "卒4",
        type: 11,
        origin: { x: 3, y: 4 },
        photoPath: "pic6",
      },
    ];
  }

  imageBase64String(path: string): string {
    var base64Str = pic0;
    switch (path) {
      case "pic0":
        base64Str = pic0;
        break;
      case "pic3":
        base64Str = pic3;
        break;
      case "pic6":
        base64Str = pic6;
        break;
      case "pic10":
        base64Str = pic10;
        break;
      case "pic11":
        base64Str = pic11;
        break;
      case "pic13":
        base64Str = pic13;
        break;
      case "pic14":
        base64Str = pic14;
        break;
    }
    return base64Str;
  }

  build(rootView: Group): void {
    const state = this.dataModel;
    if (!state || !state.rolePositions) return;
    vlayout(
      [
        text({
          text: "三国华容道",
          textColor: buttonColor,
          fontStyle: "bold",
          textSize: 20,
          layoutConfig: layoutConfig()
            .fit()
            .configAlignment(Gravity.Center)
            .configMargin({ top: 30 }),
        }),
        stack(
          [
            ...(this.roleViews = state.rolePositions.map(
              (item: RoleModel, index: number) => {
                var view = gestureContainer(
                  image({
                    imageBase64: this.imageBase64String(item.photoPath),
                    layoutConfig: layoutConfig().most(),
                    scaleType: ScaleType.ScaleAspectFill,
                  }),
                  {
                    backgroundColor: colors[index % colors.length],
                    layoutConfig: layoutConfig().just(),
                    top: item.origin.y * kMenuWidth,
                    left: item.origin.x * kMenuWidth,
                    width: Math.floor(item.type / 10) * kMenuWidth,
                    height: (item.type % 10) * kMenuWidth,
                    onPan: (dx: number, dy: number) => {
                      if (!this.responsedGesture) {
                        //direction: 1 left, 2 right, 3 top, 4 bottom
                        if (dx > 1 && Math.abs(dy) <= 5) {
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 1, view);
                        } else if (dx < -1 && Math.abs(dy) <= 5) {
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 2, view);
                        } else if (dy > 1 && Math.abs(dx) <= 5) {
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 3, view);
                        } else if (dy < -1 && Math.abs(dx) <= 5) {
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 4, view);
                        }
                      }
                    },
                    onTouchUp: (event) => {
                      this.responsedGesture = false;
                    },
                  }
                );
                return view;
              }
            )),
          ],
          {
            width: kWidth,
            height: kHeight,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: buttonColor,
            border: {
              color: buttonColor,
              width: 4,
            },
          }
        ),
        flexlayout(
          [
            (this.saveBtn = text({
              text: "保存进度",
              textColor: Color.WHITE,
              layoutConfig: layoutConfig().just(),
              width: 90,
              height: 32,
              backgroundColor: buttonColor,
              corners: 16,
            })),
            (this.rePlayBtn = text({
              text: "重新开始",
              textColor: Color.WHITE,
              layoutConfig: layoutConfig().just(),
              width: 90,
              height: 32,
              backgroundColor: buttonColor,
              corners: 16,
            })),
            (this.backBtn = text({
              text: "回退",
              textColor: Color.WHITE,
              layoutConfig: layoutConfig().just(),
              width: 90,
              height: 32,
              backgroundColor: buttonColor,
              corners: 16,
            })),
          ],
          {
            width: kWidth,
            layoutConfig: layoutConfig()
              .justWidth()
              .fitHeight()
              .configAlignment(Gravity.Center)
              .configMargin({ top: 20 }),
            flexConfig: {
              flexDirection: FlexDirection.ROW,
              justifyContent: Justify.SPACE_AROUND,
            },
          }
        ),
      ],
      {
        layoutConfig: layoutConfig().most(),
        backgroundColor: Color.parse("#FDF5E6"),
        space: 20,
      }
    ).in(rootView);
    this.attached(state, this);
  }

  onCreate(): void {
    this.dataModel.steps = [];
    this.dataModel.rolePositions = [
      {
        name: "张飞",
        type: 12,
        origin: { x: 0, y: 0 },
        photoPath: "pic11",
      },
      {
        name: "曹操",
        type: 22,
        origin: { x: 1, y: 0 },
        photoPath: "pic0",
      },
      {
        name: "赵云",
        type: 12,
        origin: { x: 3, y: 0 },
        photoPath: "pic10",
      },
      {
        name: "黄忠",
        type: 12,
        origin: { x: 0, y: 2 },
        photoPath: "pic14",
      },
      {
        name: "关羽",
        type: 21,
        origin: { x: 1, y: 2 },
        photoPath: "pic3",
      },
      {
        name: "马超",
        type: 12,
        origin: { x: 3, y: 2 },
        photoPath: "pic13",
      },
      {
        name: "卒1",
        type: 11,
        origin: { x: 1, y: 3 },
        photoPath: "pic6",
      },
      {
        name: "卒2",
        type: 11,
        origin: { x: 2, y: 3 },
        photoPath: "pic6",
      },
      {
        name: "卒3",
        type: 11,
        origin: { x: 0, y: 4 },
        photoPath: "pic6",
      },
      {
        name: "卒4",
        type: 11,
        origin: { x: 3, y: 4 },
        photoPath: "pic6",
      },
    ];
    // 读取进度缓存
    storage(this.context)
      .getItem(kGameProgressKey)
      .then((cache) => {
        if (cache) {
          const s = JSON.parse(cache);
          this.dataModel = s;
          this.resetSubViewsFrame(s);
        }
      });
  }
}

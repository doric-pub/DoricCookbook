import {
  AndroidAssetsResource,
  animate,
  ClassType,
  Color,
  FlexDirection,
  flexlayout,
  gestureContainer,
  Gravity,
  Group,
  image,
  Justify,
  log,
  MainBundleResource,
  ScaleType,
  stack,
  Text,
  text,
  View,
  ViewHolder,
  ViewModel,
  vlayout,
  VMPanel,
} from "doric";
import { layoutConfig } from "doric/lib/src/util/layoutconfig";
import * as PubTool from "../PubTool";

interface RoleModel {
  name: string;
  type: 12 | 22 | 21 | 11;
  origin: {
    x: number;
    y: number;
  };
  photoPath: string;
}

interface DataModel {
  steps?: Array<String>;
  // 数据源 角色数组
  rolePositions?: Array<RoleModel>;
}

const kMenuWidth = Math.floor((Environment.screenWidth - 60) / 4);
const kWidth = 4 * kMenuWidth;
const kHeight = 5 * kMenuWidth;

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

const buttonColor = Color.parse("#A0522D")

class HuaRongDaoView extends ViewHolder {
  private responsedGesture: boolean = false;
  rePlayBtn!: Text;
  backBtn!: Text;
  root!: Group;
  moveRoleHandler?: (index: number, direction: number, view: View) => boolean;
  // 存储所有的卡片视图
  roleViews?: View[];

  build(root: Group): void {
    this.root = root;
  }
  realBuild(state: DataModel): void {
    if (!state || !state.rolePositions) return;
    log(`buildbuildbuildbuildbuildbuildbuildbuildbuildbuild`);
    vlayout(
      [
        text({
          text: "三国华容道",
          textColor: Color.parse("#A0522D"),
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
                    image:
                      Environment.platform === "Android"
                        ? new AndroidAssetsResource(item.photoPath)
                        : new MainBundleResource(item.photoPath),
                    layoutConfig: layoutConfig().most(),
                    scaleType: ScaleType.ScaleAspectFill,
                  }),
                  // text({
                  //   text: item.name,
                  //   textColor: Color.BLACK,
                  //   layoutConfig: layoutConfig().most(),
                  // }),
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
                        if (dx > 3 && Math.abs(dy) <= 1) {
                          log("左移动");
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 1, view);
                        } else if (dx < -3 && Math.abs(dy) <= 1) {
                          log("右移动");
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 2, view);
                        } else if (dy > 3 && Math.abs(dx) <= 1) {
                          log("上移动");
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 3, view);
                        } else if (dy < -3 && Math.abs(dx) <= 1) {
                          log("下移动");
                          this.responsedGesture = true;
                          this.checkRoleCanMoveToDirection(index, 4, view);
                        }
                      }
                    },
                    onTouchUp: (event) => {
                      log(`onTouchUp`);
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
            backgroundColor: Color.parse("#A0522D"),
            border: {
              color: Color.parse("#A0522D"),
              width: 4,
            },
          }
        ),
        flexlayout(
          [
            (this.rePlayBtn = text({
              text: "重新开始",
              layoutConfig: layoutConfig().just(),
              width: 90,
              height: 32,
              corners: 16,
              backgroundColor: buttonColor
            })),
            (this.backBtn = text({
              text: "回退",
              layoutConfig: layoutConfig().just(),
              width: 90,
              height: 32,
              corners: 16,
              backgroundColor: buttonColor
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
        backgroundColor: PubTool.bgColor,
        space: 20,
      }
    ).in(this.root);
  }

  // 检测人物是否能向该方向移动
  // direction: 1 left, 2 right, 3 top, 4 top
  checkRoleCanMoveToDirection(index: number, direction: number, view: View) {
    if (this.moveRoleHandler) {
      this.moveRoleHandler(index, direction, view);
    }
  }
}

class HuaRongDaoVM extends ViewModel<DataModel, HuaRongDaoView> {
  onAttached(state: DataModel, vh: HuaRongDaoView): void {
    log(`onAttached state: ${state.rolePositions}`);
    vh.realBuild(state);
    vh.moveRoleHandler = (index, direction, view) => {
      const it = this.getState();
      if (
        !it ||
        !vh.roleViews ||
        !it.rolePositions ||
        vh.roleViews.length != it.rolePositions.length
      )
        return false;
      const item: RoleModel = it.rolePositions[index];
      log(
        `moveRoleHandler item.name : ${item.name} item.origin.y = ${item.origin.y}`
      );
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
        log(` X < 0 || Y < 0 不可以移动!`);
        return false;
      }
      if (maxX > kWidth || maxY > kHeight) {
        log(
          `item.name : ${item.name} maxY = ${maxY}, maxX = ${maxX}, item.origin.y = ${item.origin.y}`
        );
        log(` maxX >= kWidth || maxY >= kHeight 不可以移动!`);
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
          log(`emaxX > X && elementX < maxX 不可以移动!`);
          log(`移动${item.name} maxX:${maxX}, maxY:${maxY}`);
          log(
            `和谁比较：${element.name} elementX:${elementX}, elementY:${elementY}`
          );
          return false;
        }
      }
      const duration = 150;
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
            });
          }
          break;
      }
      log(`可以移动...`);
      return true;
    };
    vh.backBtn.onClick = () => {
      log(`luxBtn.title = 回退`);
    };
    /// 重新开始
    vh.rePlayBtn.onClick = () => {
      log(`luxBtn.title = 重新开始`);
      this.updateState((state) => {
        this.reset(state);
        animate(this.context)({
          animations: () => {
            if (vh.roleViews) {
              vh.roleViews.forEach((view, index) => {
                if (
                  vh.roleViews &&
                  state.rolePositions &&
                  vh.roleViews.length == state.rolePositions.length
                ) {
                  const item: RoleModel = state.rolePositions[index];
                  if (item) {
                    view.y = item.origin.y * kMenuWidth;
                    view.x = item.origin.x * kMenuWidth;
                  }
                }
              });
            }
          },
          duration: 300
        })
      });
    };
  }

  onBind(state: DataModel, vh: HuaRongDaoView): void {
    log(`onBind state: ${state.rolePositions}`);
  }

  // 重置
  reset(it: DataModel) {
    it.rolePositions = [
      {
        name: "张飞",
        type: 12,
        origin: { x: 0, y: 0 },
        photoPath: "assets/pic11.png",
      },
      {
        name: "曹操",
        type: 22,
        origin: { x: 1, y: 0 },
        photoPath: "assets/pic0.png",
      },
      {
        name: "赵云",
        type: 12,
        origin: { x: 3, y: 0 },
        photoPath: "assets/pic10.png",
      },
      {
        name: "黄忠",
        type: 12,
        origin: { x: 0, y: 2 },
        photoPath: "assets/pic14.png",
      },
      {
        name: "关羽",
        type: 21,
        origin: { x: 1, y: 2 },
        photoPath: "assets/pic3.png",
      },
      {
        name: "马超",
        type: 12,
        origin: { x: 3, y: 2 },
        photoPath: "assets/pic13.png",
      },
      {
        name: "卒1",
        type: 11,
        origin: { x: 1, y: 3 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒2",
        type: 11,
        origin: { x: 2, y: 3 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒3",
        type: 11,
        origin: { x: 0, y: 4 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒4",
        type: 11,
        origin: { x: 3, y: 4 },
        photoPath: "assets/pic6.png",
      },
    ];
    it.rolePositions.forEach((item, index) => {
      log(`reset item.name : ${item.name} , item.origin.y: ${item.origin.y}`);
    });
  }
}

@Entry
export class HuaRongDao extends VMPanel<DataModel, HuaRongDaoView> {
  // 数据源
  dataModel: DataModel = {};

  getViewModelClass(): ClassType<ViewModel<DataModel, HuaRongDaoView>> {
    return HuaRongDaoVM;
  }

  getState(): DataModel {
    return this.dataModel;
  }

  getViewHolderClass(): ClassType<HuaRongDaoView> {
    return HuaRongDaoView;
  }

  onCreate(): void {
    log(`onCreate`);
    this.dataModel.rolePositions = [
      {
        name: "张飞",
        type: 12,
        origin: { x: 0, y: 0 },
        photoPath: "assets/pic11.png",
      },
      {
        name: "曹操",
        type: 22,
        origin: { x: 1, y: 0 },
        photoPath: "assets/pic0.png",
      },
      {
        name: "赵云",
        type: 12,
        origin: { x: 3, y: 0 },
        photoPath: "assets/pic10.png",
      },
      {
        name: "黄忠",
        type: 12,
        origin: { x: 0, y: 2 },
        photoPath: "assets/pic14.png",
      },
      {
        name: "关羽",
        type: 21,
        origin: { x: 1, y: 2 },
        photoPath: "assets/pic3.png",
      },
      {
        name: "马超",
        type: 12,
        origin: { x: 3, y: 2 },
        photoPath: "assets/pic13.png",
      },
      {
        name: "卒1",
        type: 11,
        origin: { x: 1, y: 3 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒2",
        type: 11,
        origin: { x: 2, y: 3 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒3",
        type: 11,
        origin: { x: 0, y: 4 },
        photoPath: "assets/pic6.png",
      },
      {
        name: "卒4",
        type: 11,
        origin: { x: 3, y: 4 },
        photoPath: "assets/pic6.png",
      },
    ];
  }
}

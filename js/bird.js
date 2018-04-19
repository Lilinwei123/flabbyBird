console.log(`bird.js`);
var bird = {
    bird: [imgs.bird0, imgs.bird1], // 正常状态图片
    up_bird: [imgs.up_bird0, imgs.up_bird1], // 向上飞的图片
    down_bird: [imgs.down_bird0, imgs.down_bird1], // 向下飞的图片，都是为了来回切换，有飞的动效
    posX: 100, // 横坐标
    posY: 200, //纵坐标
    speed: 0, //速度
    index: 0,
    alive: true,

    // 绘制小鸟
    draw: function (bird) {
        ctx.drawImage(bird, this.posX, this.posY);
    },

    // 小标切换，形成小鸟挥动的效果
    wingWave: function () { 
        this.index++;
        if(this.index > 1) {
            this.index = 0;
        }
    },

    dead: function () {
        this.alive = false;
    },

    // 小鸟只是上下动，背景的重绘造成小鸟在向前飞的假象
    fly: function () {
        this.posY += this.speed;
        this.speed++;

        // 控制最快的加速度为6
        if (this.speed > 6) {
            this.speed = 6;
        }
        
        // 撞到天花板 
        if (this.posY < 0) {
            this.speed = 6;
        }

        // 碰到地面
        if (this.posY > 395) {
            this.speed = 0;
            this.draw(this.bird[index]);
            this.dead();
        }

        
    }
};
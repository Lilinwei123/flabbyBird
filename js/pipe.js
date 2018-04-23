console.log(`pipe.js`);

class Pipe {
    constructor (up_pipe, down_pipe, up_mod, down_mod) {
        this.up_pipe = up_pipe;
        this.down_pipe = down_pipe;
        this.up_mod = up_mod;
        this.down_mod = down_mod;
        this.up_height = Math.floor(Math.random()*60) * 3; // 随机生成组成上管体的mod的个数
        // 将上下两个水管之间的距离定为120
        this.down_height = 183 - this.up_height;
        this.posX = 336;
        this.up_posY = this.up_height;
        this.down_posY = 180 + this.up_height;
        this.hadSkipped = false;//是否被越过
        this.hadSkippedChange = false;//去重
    }

    // 绘制管体头
    drawPipe () { 
        ctx.drawImage(imgs.up_pipe, this.posX, this.up_posY);
        ctx.drawImage(imgs.down_pipe, this.posX, this.down_posY);
    }

    // 绘制管体
    drawMod () {
        // 上管体
        for (let i = 0; i < this.up_height / 3; i++) {
            ctx.drawImage(imgs.up_mod, this.posX, 3 * i);
        }

        // 下管体
        for (let j = 0; j < this.down_height / 2; j++) {
            ctx.drawImage(imgs.down_mod, this.posX, this.down_posY + 60 + j * 2);
        }
    }

    // 水管移动
    move () {
        this.posX -= 6;
        this.drawPipe();
        this.drawMod();
        // console.log(this.posX);
    }
}
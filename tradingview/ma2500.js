// 使用手册
// https://www.tradingview.com/pine-script-docs/en/v4/essential/index.html
// 函数功能中文版
// https://cn.tradingview.com/pine-script-reference/v4/#op_for


//内置MA
//@version=4
study(title="Moving Average", shorttitle="MA", overlay=true, resolution="")
len = input(9, minval=1, title="Length")
src = input(close, title="Source")
offset = input(title="Offset", type=input.integer, defval=0, minval=-500, maxval=500)
out = sma(src, len)
plot(out, color=color.blue, title="MA", offset=offset)

//内置MA修改1，在内置MA原代码基础上绘制平行线
//@version=4
study(title="Moving Average", shorttitle="MA", overlay=true, resolution="")
len = input(9, minval=1, title="Length")
src = input(close, title="Source")
offset = input(title="Offset", type=input.integer, defval=0, minval=-500, maxval=500)
// out = sma(src, len)
out1= sma(src, len)*0.8
out2= sma(src, len)
out3= sma(src, len)*1.2
out4= sma(src, len)*1.4
out5= sma(src, len)*1.6
plot(out1, color=color.black, title="MA1")
plot(out2, color=color.blue, title="MA2")
plot(out3, color=color.gray, title="MA3")
plot(out4, color=color.green, title="MA4")
plot(out5, color=color.aqua, title="MA5")

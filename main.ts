function Face_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
            초기화 = 1
        }
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("HI")
    basic.pause(100)
    초기화 = 0
}
let 초기화 = 0
Face_Recognition()
basic.forever(function () {
	
})

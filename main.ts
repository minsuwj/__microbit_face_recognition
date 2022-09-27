let 초기화 = 0
function Face_Recognition () {
    초기화 = 0
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Sad)
            basic.pause(100)
            basic.clearScreen()
            초기화 = 1
        }
    }
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    basic.showString("CRIMINAL")
    basic.pause(100)
    초기화 += -1
}
basic.forever(function () {
    Face_Recognition()
})

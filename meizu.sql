/*
Navicat MySQL Data Transfer

Source Server         : lijie1810
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-03-01 10:43:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `meizupic`
-- ----------------------------
DROP TABLE IF EXISTS `meizupic`;
CREATE TABLE `meizupic` (
  `sid` tinyint(99) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` float(8,2) unsigned NOT NULL,
  `urls` varchar(999) NOT NULL,
  `class` varchar(99) DEFAULT NULL,
  `color` varchar(99) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of meizupic
-- ----------------------------
INSERT INTO `meizupic` VALUES ('1', 'https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png', '魅族 X8', '人脸指纹双解锁 旗舰双摄', '1298.00', 'https://openfile.meizu.com/group1/M00/06/B7/Cgbj0VusSK-ABWIRAAm412yc0Ac039.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSLGAE44DAAeLveNy2X4743.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/B7/Cgbj0VusSKmAGC6DAAaMxdXOpAY680.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/A8/Cgbj0FusSKiAW4z7AALHc8pivJY472.png680x680.jpg', 'big big1', 'quan red');
INSERT INTO `meizupic` VALUES ('2', 'https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png', '魅族 16th Plus', '骁龙845 屏幕下指纹', '2998.00', 'https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgkGAGR7oAAlO1raU1PA201.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgjiAKsrfAANgXYqK538272.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkGAAJefAASvxzwhjFc615.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/F0/Cgbj0Vtqgj-AQW52AAJZZteaDhA041.png680x680.jpg', 'big big2', 'quan orange');
INSERT INTO `meizupic` VALUES ('3', 'https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png', '魅族 16th', '骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖', '2498.00', 'https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgmuAHzQbAAflWG0_wvs749.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgmaAHfhqAAFiPmKWlSs471.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgmaASQbXAAR4vsQCVjs385.png680x680.jpg,https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgmaAZbciAAIlAkUcoM0146.png680x680.jpg', 'phone', 'quan orange');
INSERT INTO `meizupic` VALUES ('4', 'https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png', '魅族 16 X', '高通骁龙710 屏幕下指纹 旗舰双摄', '1798.00', 'https://openfile.meizu.com/group1/M00/06/BC/Cgbj0FvINLWAZXL4AAz1Mo4DEhM073.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/8B/Cgbj0FuhuRSAb5gFAAbE_1LV5J4607.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/8B/Cgbj0FuhuRuAIaA_AAZ2zJxTzvE796.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/9A/Cgbj0VuhuRqAXFtFAAKWDH4wXUY208.png680x680.jpg', 'phone', 'quan blue');
INSERT INTO `meizupic` VALUES ('5', 'https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png', '魅族 Note8', '全像素双核对焦 大电池长续航', '999.00', 'https://openfile.meizu.com/group1/M00/06/D3/Cgbj0VvQPm-AU7iSAAN3TL0zCwc952.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/C2/Cgbj0FvQPkyAeA3jAAlxckyWpiE392.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/D3/Cgbj0VvQPmaAJJ_8AAjqfW6zZpI896.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/D3/Cgbj0VvQPliAdzCRAANqob0dHIc404.png680x680.jpg', 'phone', 'quan blue');
INSERT INTO `meizupic` VALUES ('6', 'https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMyAYB76AATj19tgy08068.png', '魅族 V8 高配版', '1200万+500万高清双摄', '898.00', 'https://openfile.meizu.com/group1/M00/06/9C/Cgbj0FujaMOAWeYJAAVEg5SVzw0604.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/8D/Cgbj0FuhxsGAfDJoAAqAjXQJ0Bc180.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/9D/Cgbj0FujaM2ATKHAAAK_9p2vL-w061.png680x680.jpg,https://openfile.meizu.com/group1/M00/06/9D/Cgbj0VuhxseAaVgtAAOJ1SSAsxc511.png680x680.jpg', 'phone last', 'quan blue');
INSERT INTO `meizupic` VALUES ('7', 'https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png', '魅族 15 Plus', '8895处理器 2000万暗光双摄', '1798.00', 'https://openfile.meizu.com/group1/M00/04/1B/Cgbj0Vrcbp-AQFzAAAwa60ww23U999.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/0D/Cgbj0Frcbp2AHIlqAAVPc7JVIoE809.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/0C/Cgbj0FrcbpaAA9VEAAYDiehKqnU023.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/1B/Cgbj0VrcbpyAA6BcAAIS93paJpU930.png680x680.jpg', 'phone', 'quan blue');
INSERT INTO `meizupic` VALUES ('8', 'https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcbkeAW38NAAjvsXhhyFE066.png', '魅族 15', '骁龙660 2000万暗光双摄', '1498.00', 'https://openfile.meizu.com/group1/M00/04/1A/Cgbj0VrcblGASw1bAAw5XLlyeCA103.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/0B/Cgbj0Frcbk-AeEorAAXY_9lHYR4332.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/19/Cgbj0VrcbkiAaSirAAXItYvB5Xo133.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/19/Cgbj0Vrcbk6AYrRNAAHbf4qjn34636.png680x680.jpg', 'phone', 'quan blue');
INSERT INTO `meizupic` VALUES ('9', 'https://openfile.meizu.com/group1/M00/03/BC/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png', '魅蓝 E3', '骁龙636处理器 全系6G大运存', '1799.00', 'https://openfile.meizu.com/group1/M00/03/AE/Cgbj0Fq9-ouAOL2HAANLjpwwwP0396.png680x680.jpg,https://openfile.meizu.com/group1/M00/03/54/Cgbj0FqxxuWAfDCwAAWcQ5C6Lxk595.png680x680.jpg,https://openfile.meizu.com/group1/M00/03/53/Cgbj0Fqxxt6ANuNXAApcpI73XNI984.png680x680.jpg,https://openfile.meizu.com/group1/M00/03/61/Cgbj0Vqxxt6AWNV5AAHxG9vndi4092.png680x680.jpg', 'phone', 'quan orange');
INSERT INTO `meizupic` VALUES ('10', 'https://openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iyAAgTIAAbXIwKFVL4647.png', '魅蓝 6T', '双摄全面屏，游戏长续航', '999.00', 'https://openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iuAC1_rAAdqS97vQTk763.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/7D/Cgbj0FsM-iWAHIIUAAOReO9LCh4720.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iWALbRNAANxJDYaZvA593.png680x680.jpg,https://openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iWAS7ecAAHZaB_-IJI619.png680x680.jpg', 'phone last', 'quan orange');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(99) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('17', '111', '96e79218965eb72c92a549dd5a330112', '2019-03-01 09:01:07');
INSERT INTO `user` VALUES ('18', '222', 'e3ceb5881a0a1fdaad01296d7554868d', '2019-03-01 09:04:13');

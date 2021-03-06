var Clock = require('./clock');
var clock = new Clock();

describe('Clock', function () {

  describe('Creating a new clock with an initial time', function () {

    it('on the hour', function () {
      expect(clock.at(8).toString()).toEqual('08:00');
    });

    it('past the hour', function () {
      expect(clock.at(11, 9).toString()).toEqual('11:09');
    });

    it('midnight is zero hours', function () {
      expect(clock.at(24, 0).toString()).toEqual('00:00');
    });

    it('hour rolls over', function () {
      expect(clock.at(25, 0).toString()).toEqual('01:00');
    });

    it('hour rolls over continuously', function () {
      expect(clock.at(100, 0).toString()).toEqual('04:00');
    });

    it('sixty minutes is next hour', function () {
      expect(clock.at(1, 60).toString()).toEqual('02:00');
    });

    it('minutes roll over', function () {
      expect(clock.at(0, 160).toString()).toEqual('02:40');
    });

    it('minutes roll over continuously', function () {
      expect(clock.at(0, 1723).toString()).toEqual('04:43');
    });

    it('hour and minutes roll over', function () {
      expect(clock.at(25, 160).toString()).toEqual('03:40');
    });

    it('hour and minutes roll over continuously', function () {
      expect(clock.at(201, 3001).toString()).toEqual('11:01');
    });

    it('hour and minutes roll over to exactly midnight', function () {
      expect(clock.at(72, 8640).toString()).toEqual('00:00');
    });

    it('negative hour', function () {
      expect(clock.at(-1, 15).toString()).toEqual('23:15');
    });

    it('negative hour rolls over', function () {
      expect(clock.at(-25, 0).toString()).toEqual('23:00');
    });

    it('negative hour rolls over continuously', function () {
      expect(clock.at(-91, 0).toString()).toEqual('05:00');
    });

    it('negative minutes', function () {
      expect(clock.at(1, -40).toString()).toEqual('00:20');
    });

    it('negative minutes rolls over', function () {
      expect(clock.at(1, -160).toString()).toEqual('22:20');
    });

    it('negative minutes rolls over continuously', function () {
      expect(clock.at(1, -4820).toString()).toEqual('16:40');
    });

    it('negative hour and minutes both roll over', function () {
      expect(clock.at(-25, -160).toString()).toEqual('20:20');
    });

    it('negative hour and minutes both roll over continuously', function () {
      expect(clock.at(-121, -5810).toString()).toEqual('22:10');
    });

    describe('Adding and subtracting minutes', function () {

      xit('add minutes', function () {
        expect(clock.at(10, 0).plus(3).toString()).toEqual('10:03');
      });

      xit('add no minutes', function () {
        expect(clock.at(6, 41).plus(0).toString()).toEqual('06:41');
      });

      xit('add to next hour', function () {
        expect(clock.at(0, 45).plus(40).toString()).toEqual('01:25');
      });

      xit('add more than one hour', function () {
        expect(clock.at(10, 0).plus(61).toString()).toEqual('11:01');
      });

      xit('add more than two hours with carry', function () {
        expect(clock.at(0, 45).plus(160).toString()).toEqual('03:25');
      });

      xit('add across midnight', function () {
        expect(clock.at(23, 59).plus(2).toString()).toEqual('00:01');
      });

      xit('add more than one day (1500 min = 25 hrs)', function () {
        expect(clock.at(5, 32).plus(1500).toString()).toEqual('06:32');
      });

      xit('add more than two days', function () {
        expect(clock.at(1, 1).plus(3500).toString()).toEqual('11:21');
      });

      xit('subtract minutes', function () {
        expect(clock.at(10, 3).minus(3).toString()).toEqual('10:00');
      });

      xit('subtract to previous hour', function () {
        expect(clock.at(10, 3).minus(30).toString()).toEqual('09:33');
      });

      xit('subtract more than an hour', function () {
        expect(clock.at(10, 3).minus(70).toString()).toEqual('08:53');
      });

      xit('subtract across midnight', function () {
        expect(clock.at(0, 3).minus(4).toString()).toEqual('23:59');
      });

      xit('subtract more than two hours', function () {
        expect(clock.at(0, 0).minus(160).toString()).toEqual('21:20');
      });

      xit('subtract more than two hours with borrow', function () {
        expect(clock.at(6, 15).minus(160).toString()).toEqual('03:35');
      });

      xit('subtract more than one day (1500 min = 25 hrs)', function () {
        expect(clock.at(5, 32).minus(1500).toString()).toEqual('04:32');
      });

      xit('subtract more than two days', function () {
        expect(clock.at(2, 20).minus(3000).toString()).toEqual('00:20');
      });

    });

    describe('Construct two separate clocks, set times, test if they are equal', function () {

      xit('clocks with same time', function () {
        expect(clock.at(15, 37).equals(clock.at(15, 37))).toBeTruthy();
      });

      xit('clocks a minute apart', function () {
        expect(clock.at(15, 36).equals(clock.at(15, 37))).toBeFalsy();
      });

      xit('clocks an hour apart', function () {
        expect(clock.at(14, 37).equals(clock.at(15, 37))).toBeFalsy();
      });

      xit('clocks with hour overflow', function () {
        expect(clock.at(10, 37).equals(clock.at(34, 37))).toBeTruthy();
      });

      xit('clocks with hour overflow by several days', function () {
        expect(clock.at(3, 11).equals(clock.at(99, 11))).toBeTruthy();
      });

      xit('clocks with negative hour', function () {
        expect(clock.at(22, 40).equals(clock.at(-2, 40))).toBeTruthy();
      });

      xit('clocks with negative hour that wraps', function () {
        expect(clock.at(17, 3).equals(clock.at(-31, 3))).toBeTruthy();
      });

      xit('clocks with negative hour that wraps multiple times', function () {
        expect(clock.at(13, 49).equals(clock.at(-83, 49))).toBeTruthy();
      });

      xit('clocks with minute overflow', function () {
        expect(clock.at(0, 1).equals(clock.at(0, 1441))).toBeTruthy();
      });

      xit('clocks with minute overflow by several days', function () {
        expect(clock.at(2, 2).equals(clock.at(2, 4322))).toBeTruthy();
      });

      xit('clocks with negative minute', function () {
        expect(clock.at(2, 40).equals(clock.at(3, -20))).toBeTruthy();
      });

      xit('clocks with negative minute that wraps', function () {
        expect(clock.at(4, 10).equals(clock.at(5, -1490))).toBeTruthy();
      });

      xit('clocks with negative minute that wraps multiple times', function () {
        expect(clock.at(6, 15).equals(clock.at(6, -4305))).toBeTruthy();
      });

      xit('clocks with negative hours and minutes', function () {
        expect(clock.at(7, 32).equals(clock.at(-12, -268))).toBeTruthy();
      });

      xit('clocks with negative hours and minutes that wrap', function () {
        expect(clock.at(18, 7).equals(clock.at(-54, -11513))).toBeTruthy();
      });

    });

  });

});

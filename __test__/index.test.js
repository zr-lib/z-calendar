const Calendar = require('../dist/index').default;

describe('z-calendar测试', () => {
  test('不传参数', () => {
    const CC = new Calendar();
    const _Date = new Date();
    const year = _Date.getFullYear();
    const month = _Date.getMonth() + 1;

    expect(CC.description).toBe('排列按照星期日~星期六');
    expect(CC.initialDate).toBe(undefined);
    expect(CC.year).toEqual(year);
    expect(CC.month).toEqual(month);
  });

  test('传参数: 2019-15', () => {
    const CC = new Calendar('2019-15');

    expect(CC.description).toBe('排列按照星期日~星期六');
    expect(CC.initialDate).toBe('2019-15');
    expect(CC.year).toEqual('');
    expect(CC.month).toEqual('');
    expect(CC.monthList).toEqual([]);
  });

  test('传参数: 2019-05', () => {
    const CC = new Calendar('2019-05');

    expect(CC.description).toBe('排列按照星期日~星期六');
    expect(CC.initialDate).toBe('2019-05');
    expect(CC.year).toEqual(2019);
    expect(CC.month).toEqual(5);

    const firstDate = CC.monthList[0][3]; // 2019-05-01
    expect(firstDate.year).toBe(2019);
    expect(firstDate.month).toBe(5);
    expect(firstDate.date).toBe(1);
    expect(firstDate.dateString).toBe('2019/05/01');

    const lastDate = CC.monthList[4][5]; // 2019-05-31
    expect(lastDate.year).toBe(2019);
    expect(lastDate.month).toBe(5);
    expect(lastDate.date).toBe(31);
    expect(lastDate.dateString).toBe('2019/05/31');
  });

  test('传参数: 2020-05', () => {
    const CC = new Calendar('2020-05');

    expect(CC.description).toBe('排列按照星期日~星期六');
    expect(CC.initialDate).toBe('2020-05');
    expect(CC.year).toEqual(2020);
    expect(CC.month).toEqual(5);

    const firstDate = CC.monthList[0][5]; // 2020-05-01
    expect(firstDate.year).toBe(2020);
    expect(firstDate.month).toBe(5);
    expect(firstDate.date).toBe(1);
    expect(firstDate.dateString).toBe('2020/05/01');

    const lastDate = CC.monthList[5][0]; // 2020-05-31
    expect(lastDate.year).toBe(2020);
    expect(lastDate.month).toBe(5);
    expect(lastDate.date).toBe(31);
    expect(lastDate.dateString).toBe('2020/05/31');
  });
});

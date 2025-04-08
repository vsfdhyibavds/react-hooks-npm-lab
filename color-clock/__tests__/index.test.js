import { JSDOM } from 'jsdom';
import { format } from './node_modules/date-fns/esm/format/index.js';
import { displayTime } from '../index.js';

describe('Clock Functionality', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <div id="clock"></div>
        </body>
      </html>
    `);
    global.document = dom.window.document;
    global.window = dom.window;
  });

  test('displays current time', () => {
    displayTime();
    const clock = document.querySelector('#clock');
    const expectedFormat = format(new Date(), "MMMM do yyyy, h:mm:ss a");
    expect(clock.textContent).toMatch(expectedFormat);
  });

  test('changes color every second', () => {
    displayTime();
    const clock = document.querySelector('#clock');
    const initialColor = clock.style.color;

    return new Promise(resolve => {
      setTimeout(() => {
        expect(clock.style.color).not.toBe(initialColor);
        resolve();
      }, 1100); // Slightly more than 1 second
    });
  });

  test('changes background color every second', () => {
    displayTime();
    const clock = document.querySelector('#clock');
    const initialBgColor = clock.style.backgroundColor;

    return new Promise(resolve => {
      setTimeout(() => {
        expect(clock.style.backgroundColor).not.toBe(initialBgColor);
        resolve();
      }, 1100);
    });
  });
});

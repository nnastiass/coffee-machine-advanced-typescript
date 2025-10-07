import  {CoffeeMachine} from '../src/coffeeMachine'
import  {Drink} from '../src/drink'
import { notifyUser } from '../src/utils/notifications';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());


describe('notifyUser', () => {
    it('calls fetch with correct url, method and payload', async () => {
        const message = 'Hello World';
        const fetchSpy = jest.mocked(fetch);
        const payload = {
            message,
            timestamp: new Date().toISOString(),
          };
        fetchSpy.mockResolvedValue({ ok: true} as any);

        await notifyUser(message)

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith('https://example.com/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
    });
});

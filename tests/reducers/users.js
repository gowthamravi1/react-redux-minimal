describe('User reducer', () => {
  describe('add()', () => {
      it('should return a new user array element', () => {
        const state = {
          list:[
            {
              id:1,
              username: 'some name',
              job: 'some job'
            }
          ]
        };

        const action = {
          type: 'users.add',
          id: 2,
          username: 'another username',
          job: 'another job'
        }

        const expected = {
          list: [
            {
              id:1,
              username: 'some name',
              job: 'some job'
            },
            {
              id: 2,
              username: 'another username',
              job: 'another job'
            }
          ]
        }
        assert.deepEqual(users(state, action), expected);
      })
  });
});

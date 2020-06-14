const state = {
  lines: [
    {
      id: 0,
      pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 *',
      tags: ['giuoco piano']
    },
    {
      id: 1,
      pgn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d4 *',
      tags: ['giuoco piano']
    }
  ],
  studies: [
    {
      id: 0,
      name: 'giuoco piano',
      lines: [0, 1]
    }
  ],
  schedule: [
    {
      line: 0,
      date: 'now',
    },
    {
      line: 1,
      date: 'now'
    }
  ],
  ui: {
    study: undefined,
    line: undefined
  }
};

export default state;

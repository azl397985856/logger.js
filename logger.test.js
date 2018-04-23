import { debug, silly, log, info, warn, error } from './logger';

describe('utils', function() {
  describe('logger', function() {
    it('默认的日志级别是ERROR', function() {
      expect(debug('这是模块名', '这是debug信息')).toBe('');
      expect(silly('这是模块名', '这是silly信息')).toBe('');
      expect(log('这是模块名', '这是log信息')).toBe('');
      expect(info('这是模块名', '这是info信息')).toBe('');
      expect(warn('这是模块名', '这是warn信息')).toBe('');
      expect(error('这是模块名', '这是error信息')).toBe('这是error信息');
    });

    it('默认打印所有模块', function() {
      process.env.LOG_LEVEL = 'silly';

      expect(debug('这是模块名', '这是debug信息')).toBe('这是debug信息');
      expect(silly('这是模块名', '这是silly信息')).toBe('这是silly信息');
      expect(log('这是模块名', '这是log信息')).toBe('这是log信息');
      expect(info('这是模块名', '这是info信息')).toBe('这是info信息');
      expect(warn('这是模块名', '这是warn信息')).toBe('这是warn信息');
      expect(error('这是模块名', '这是error信息')).toBe('这是error信息');
    });

    it('仅打印指定日志级别', function() {
      process.env.LOG_LEVEL = 'info';

      expect(debug('这是模块名', '这是debug信息')).toBe('');
      expect(silly('这是模块名', '这是silly信息')).toBe('');
      expect(log('这是模块名', '这是log信息')).toBe('');
      expect(info('这是模块名', '这是info信息')).toBe('这是info信息');
      expect(warn('这是模块名', '这是warn信息')).toBe('这是warn信息');
      expect(error('这是模块名', '这是error信息')).toBe('这是error信息');
    });

    it('仅打印指定模块', function() {
      process.env.LOG_LEVEL = 'silly';
      process.env.MOD = '模块A';

      expect(debug('模块A', '这是debug信息')).toBe('这是debug信息');
      expect(silly('模块A', '这是silly信息')).toBe('这是silly信息');
      expect(log('模块C', '这是log信息')).toBe('');
      expect(info('模块C', '这是info信息')).toBe('');
      expect(warn('模块A', '这是warn信息')).toBe('这是warn信息');
      expect(error('模块A', '这是error信息')).toBe('这是error信息');
    });
  });
});

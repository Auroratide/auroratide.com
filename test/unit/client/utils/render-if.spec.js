import { renderIf, renderIfElse } from 'Client/utils/render-if';

describe('renderIf Util', () => {
  const component = 'component';

  describe('renderIf', () => {
    it('should render the component when the condition is true', () => {
      expect(renderIf(true, () => component)).toEqual(component);
    });

    it('should render null when the condition is false', () => {
      expect(renderIf(false, () => component)).toBeNull();
    });
  });

  describe('renderIfElse', () => {
    const elseComponent = 'else';

    it('should render the first component when the condition is true', () => {
      expect(renderIfElse(true,
        () => component
      ).elseRender(
        () => elseComponent
      )).toEqual(component);
    });

    it('should render the else component when the condition is false', () => {
      expect(renderIfElse(false,
        () => component
      ).elseRender(
        () => elseComponent
      )).toEqual(elseComponent);
    });
  });
});
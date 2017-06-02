import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should ...', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calucar(1, 4, CalculadoraService.SOMA);
      expect(resultado).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calucar(1, 4, CalculadoraService.SUBTRACAO);
      expect(resultado).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calucar(1, 4, CalculadoraService.DIVISAO);
      expect(resultado).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calucar(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(resultado).toEqual(4);
    })
  );

  it('deve returnar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calucar(1, 4, '%');
      expect(resultado).toEqual(0);
    })
  );


});

export interface IWeather {
    id: number;
    name: string;
    country: string;
    main: {
        temp_min: number;
        temp_max: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        sunrise: number;
        sunset: number;
    };
}
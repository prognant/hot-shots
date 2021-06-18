 dgram = require("dgram");

 "hot-shots" {
  Tags = { [key: string]: string }  string[];
  ClientOptions {
    bufferFlushInterval?: number;
    bufferHolder?: { buffer: string };
    cacheDns?: boolean;
    cacheDnsTtl?: number;
    errorHandler?: (err: Error) => ;
    globalTags?: Tags;
    globalize?: boolean;
    host?: string;
    isChild?: boolean;
    maxBufferSize?: number;
    mock?: boolean;
    path?: string;
    port?: number;
    prefix?: string;
    protocol?: 'tcp' | 'udp' | 'uds';
    sampleRate?: number;
    socket?: dgram.Socket;
    suffix?: string;
    telegraf?: boolean;
    useDefaultRoute?: boolean;
    tagPrefix?: string;
    tagSeparator?: string;
    udsGracefulErrorHandling?: boolean;
    udsGracefulRestartRateLimit?: number;
  }

  
 ChildClientOptions {
    globalTags?: Tags;
    prefix?: string;
    suffix?: string;
  }

 CheckOptions {
    date_happened?: Date;
    hostname?: string;
    message?: string;
  }

  export interface DatadogChecks {
    OK: 0;
    WARNING: 1;
    CRITICAL: 2;
    UNKNOWN: 3;
  }

  unionFromInterfaceValues4<
    T,
    K1 extends keyof T,
    K2 extends keyof T,
    K3 extends keyof T,
    K4 extends keyof T,
    > = T[K1]  T[K2]  T[K3]  T[K4];

  DatadogChecksValues = unionFromInterfaceValues4<DatadogChecks, "OK", "WARNING", 
 
  EventOptions {
    aggregation_key?: ;
    alert_type?: "info"  "warning"  "success"  "error";
    date_happened?: Date;
    hostname?: string;
    priority?: "low"  "normal";
    source_type_name?: string;
  }

   StatsCb = (error: Error | undefined, bytes: ) => ;

   StatsD {
    constructor(options?: ClientOptions);
    childClient(options?: ChildClientOptions): StatsD;

    increment(stat: string, tags?: Tags): ;
    increment(stat: string  string[], value: number, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    increment(stat: string  string[], value: number, tags?: Tags, callback?: StatsCb): ;
    increment(stat: string  string[], value: number, callback?: StatsCb): ;
    increment(stat: string  string[], value: number, sampleRate?: number, callback?: StatsCb): ;

    decrement(stat: string): ;
    decrement(stat: string  string[], value: number, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    decrement(stat: string  string[], value: number, tags?: Tags, callback?: StatsCb): ;
    decrement(stat: string  string[], value: number, callback?: StatsCb): ;
    decrement(stat: string  string[], value: number, sampleRate?: number, callback?: StatsCb): ;

    timing(stat: string  string[], value: number  Date, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    timing(stat: string  string[], value: number  Date, tags?: Tags, callback?: StatsCb): ;
    timing(stat: string  string[], value: number  Date, callback?: StatsCb): ;
    timing(stat: string  string[], value: number  Date, sampleRate?: number, callback?: StatsCb): ;

    timer<P extends any[], R>(func: (...args: P) => R, stat: string  string[], sampleRate?: number, tags?: Tags, callback?: StatsCb): (...args: P) => R;
    timer<P extends any[], R>(func: (...args: P) => R, stat: string  string[], tags?: Tags, callback?: StatsCb): (...args: P) => R;
    timer<P extends any[], R>(func: (...args: P) => R, stat: string  string[], callback?: StatsCb): (...args: P) => R;
    timer<P extends any[], R>(func: (...args: P) => R, stat: string  string[], sampleRate?: number, callback?: StatsCb): (...args: P) => R;

    asyncTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string  string[], sampleRate?: number, tags?: Tags, callback?: StatsCb): (...args: P) => Promise<R>;
    asyncTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string  string[], tags?: Tags, callback?: StatsCb): (...args: P) => Promise<R>;
    asyncTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string  string[], callback?: StatsCb): (...args: P) => Promise<R>;
    asyncTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string  string[], sampleRate?: number, callback?: StatsCb): (...args: P) => Promise<R>;

    asyncDistTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string | string[], sampleRate?: number, tags?: Tags, callback?: StatsCb): (...args: P) => Promise<R>;
    asyncDistTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string | string[], tags?: Tags, callback?: StatsCb): (...args: P) => Promise<R>;
    asyncDistTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string | string[], callback?: StatsCb): (...args: P) => Promise<R>;
    asyncDistTimer<P extends any[], R>(func: (...args: P) => Promise<R>, stat: string | string[], sampleRate?: number, callback?: StatsCb): (...args: P) => Promise<R>;

    histogram(stat: string  string[], value: number, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    histogram(stat: string  string[], value: number, tags?: Tags, callback?: StatsCb): ;
    histogram(stat: string  string[], value: number, callback?: StatsCb): ;
    histogram(stat: string  string[], value: number, sampleRate?: number, callback?: StatsCb): ;

    distribution(stat: string  string[], value: number, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    distribution(stat: string  string[], value: number, tags?: Tags, callback?: StatsCb): ;
    distribution(stat: string  string[], value: number, callback?: StatsCb): ;
    distribution(stat: string  string[], value: number, sampleRate?: number, callback?: StatsCb): ;

    gauge(stat: string  string[], value: number, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    gauge(stat: string  string[], value: number, tags?: Tags, callback?: StatsCb): ;
    gauge(stat: string  string[], value: number, callback?: StatsCb): ;
    gauge(stat: string  string[], value: number, sampleRate?: number, callback?: StatsCb): ;

    set(stat: string  string[], value: number  string, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    set(stat: string  string[], value: number  string, tags?: Tags, callback?: StatsCb): ;
    set(stat: string  string[], value: number  string, callback?: StatsCb): ;
    set(stat: string  string[], value: number  string, sampleRate?: number, callback?: StatsCb): ;

    unique(stat: string  string[], value: number  string, sampleRate?: number, tags?: Tags, callback?: StatsCb): ;
    unique(stat: string  string[], value: number  string, tags?: Tags, callback?: StatsCb): ;
    unique(stat: string  string[], value: number  string, callback?: StatsCb): ;
    unique(stat: string  string[], value: number  string, sampleRate?: number, callback?: StatsCb): ;

    close(callback: (error?: Error) => ): ;

    event(title: string, text?: string, options?: EventOptions, tags?: Tags, callback?: StatsCb): ;
    event(title: string, text?: string, options?: EventOptions, callback?: StatsCb): ;
    check(name: string, status: DatadogChecksValues, options?: CheckOptions, tags?: Tags, callback?: StatsCb): ;

     CHECKS: DatadogChecks;
     mockBuffer?: string[];
     socket: dgram.Socket;
  }
}

 StatsDClient:  (options?: ClientOptions) => StatsD;
 StatsDClient;

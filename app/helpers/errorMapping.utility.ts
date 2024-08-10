type ErrorType = 'Validation error';

const errorMapping: Record<ErrorType, { statusCode: number, message: string }> = {
    'Validation error': { statusCode: 400, message: 'Invalid input data' }
}

export const mapErrorToResponse = (error:Error) => {
    console.log(error.message);
    const errorKey = error.message.split(': ')[1] as ErrorType;
    let mappedError = {statusCode: 500, message: ''}
    mappedError = {...errorMapping[errorKey]}
    if(mappedError.statusCode){
        mappedError.message = `${mappedError.message}`;
        return mappedError;
    }
    else {
        return {statusCode: 500, message: 'Error without handler '+ error.message}
    }
    
}
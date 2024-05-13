import CONFIG from 'react-native-config';
import {ServiceInstance, ServiceInstanceParams} from '../client';

const getBaseUrl = () => CONFIG.BASE_URL ?? '';

const SERVICE_CONFIG: ServiceInstanceParams = {
  baseUrl: getBaseUrl(),
  serviceName: '',
};

export const TestService = ServiceInstance(SERVICE_CONFIG);

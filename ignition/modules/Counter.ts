import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

// 调用已部署的 Counter 合约。
export default buildModule('CounterModule', (m) => {
	const counter = m.contract('Counter');

	m.call(counter, 'incBy', [5n]);

	return { counter };
});
